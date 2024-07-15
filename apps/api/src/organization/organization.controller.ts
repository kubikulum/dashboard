import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as errors from "../errors";
import { OrganizationControllerBase } from "./base/organization.controller.base";
import { InvitationCreateInput } from "./inivitationCreateInput";
import { OrganizationWhereUniqueInput } from "./base/OrganizationWhereUniqueInput";
import { nanoid } from 'nanoid'
import { Request } from "express";
import { AllowNoOrganization } from "src/auth/organization.guard";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { Organization } from "./base/Organization";
import { OrganizationCreateInput } from "./base/OrganizationCreateInput";
import { OrganizationInvitationsService, UsersService, OrganizationsService, OrganizationRolesService } from "src/logto-auth-management";
import { firstValueFrom } from "rxjs";
import { OrganizationService } from "./organization.service";
import { InvitationService } from "../invitation/invitation.service";
import { ConfigService } from "@nestjs/config";

import { OrganizationMember } from "../organizationMember/base/OrganizationMember";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../decorators/api-nested-query.decorator";
import { AclFilterResponseInterceptor } from "../interceptors/aclFilterResponse.interceptor";
import { OrganizationMemberFindManyArgs } from "../organizationMember/base/OrganizationMemberFindManyArgs";
import { UserRoles } from "nest-access-control";


@swagger.ApiTags("organizations")
@common.Controller("organizations")
export class OrganizationController extends OrganizationControllerBase {
  constructor(
    protected readonly service: OrganizationService,
    protected readonly config: ConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    protected readonly invitationServie: InvitationService,
    protected readonly authOrganizationsService: OrganizationsService,
    protected readonly organizationInvitationService: OrganizationInvitationsService,
    protected readonly organizationRolesService: OrganizationRolesService
  ) {
    super(service, rolesBuilder);
  }


  override async createOrganization(@common.Body() data: OrganizationCreateInput,): Promise<Organization> {
    return super.createOrganization(data);
  }

  @AllowNoOrganization()
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Organization })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOrganizationOverride(@common.Req() req: any, @common.Body() body: OrganizationCreateInput) {
    const { data: org } = await firstValueFrom(this.authOrganizationsService.createOrganization({
      name: body.name,
    }));
    await firstValueFrom(this.authOrganizationsService.addOrganizationUsers(org.id, { userIds: [req.user.id] }));
    //
    const roleId = this.config.get('LOGTO_ORGANIZATION_ROLE_ADMIN_ID');
    await firstValueFrom(this.authOrganizationsService.assignOrganizationRolesToUser(org.id, req.user.id, { organizationRoleIds: [roleId] }));
    const organization = await this.service.createOrganization({
      data: {
        name: body.name, id: org.id, ownerId: req.user.id,
        organizationMembers: {
          create: {
            user: {
              connect: {
                id: req.user.id
              }
            },
            roles: ['ADMIN']
          }
        }
      }
    });

    // // the project name should have maximum 10 characters
    // const name = org.id.length > 10 ? org.id.substring(0, 10) : org.id;
    // // Create a new project gardener for the organization
    // const createReq = this.gardenerClientService.createCoreGardenerCloudV1beta1Project({
    //   metadata: { name: name, labels: { organization: org.name, organizationId:org.id } },
    //   spec: {
    //     createdBy: {
    //       apiGroup: "rbac.authorization.k8s.io",
    //       kind: "User",
    //       name: `oidc:${req.user.username}`
    //     },
    //     members: [
    //       {
    //         apiGroup: "rbac.authorization.k8s.io",
    //         kind: "User",
    //         name: `oidc:${req.user.username}`,
    //         role: "admin",
    //         roles: ["owner"]
    //       }

    //     ],

    //   }
    // })
    // const token = this.config.get("GARDENER_SA_TOKEN");
    // createReq.source = of(token);
    // try {
    //   const { data } = await firstValueFrom(
    //     createReq.pipe(
    //       catchError((error: AxiosError) => {
    //         console.error(error);
    //         throw error
    //       })
    //     )
    //   )
    // } catch (error) {
    //   // if the project creation fails, delete the organization
    //   await this.service.deleteOrganization({ where: { id: org.id } });
    //   await this.authManagementService.deleteOrganization(org.id);
    //   throw new errors.NotFoundException("Failed to create project in gardener");
    // }
    return organization;
  }

  @common.Post("/:id/invitations")
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "create",
    possession: "any",
  })
  async sendInvitations(
    @common.Req() req: any,
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: InvitationCreateInput[]
  ): Promise<any[]> {
    //The epoch time in milliseconds when the invitation expires.
    // expire after 48h
    const expireTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    let now = new Date();
    now.setDate(now.getDate() + 2)


    const { data: roles } = await firstValueFrom(this.organizationRolesService.listOrganizationRoles())

    // Create Invatitation for logto auth management

    const promises = body.map(async (invitationRequest) => {
      const code = nanoid(10)
      const roleId = roles.find(role => role.name === invitationRequest.role)?.id
      if (!invitationRequest.email) {
        throw new Error('Email is required')
      }
      const organizationRoleIds = roleId ? [roleId] : []
      const { data: logToInvitation } = await firstValueFrom(this.organizationInvitationService.createOrganizationInvitation({
        organizationId: params.id,
        inviterId: req.user.id,
        invitee: invitationRequest.email,
        expiresAt: expireTime,
        organizationRoleIds,
        messagePayload: {
          code: code,
          link: `http://${req.get('Host')}/invitation/${code}`
        }
      }))

      const invitation = await this.invitationServie.createInvitation({
        data: {
          id: logToInvitation.id,
          organizationId: params.id,
          inviterId: req.user.id,
          email: invitationRequest.email,
          expirationDate: now,
          code: code,
          status: 'PENDING',
          // role: invitationRequest.role
        }
      });
      return invitation

    })
    return Promise.all(promises)
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/organizationMembers")
  @ApiNestedQuery(OrganizationMemberFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrganizationMember",
    action: "read",
  })
  override async findOrganizationMembers(
    @common.Req() request: any,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<OrganizationMember[]> {

    // Check if the user has the permission to read this resource
    if (this.rolesBuilder.can(request.user?.roles).readOwn('OrganizationMember').granted) {
      const query = await this.service.findOrganizationMembers(params.id,{where:{user:{id:request.user.id}}})
      if (query.length === 0) {
        throw new errors.ForbiddenException(
          `You don't have permission to read this resource`
        );
      }
    }
    const query = plainToClass(OrganizationMemberFindManyArgs, request.query);
    const results = await this.service.findOrganizationMembers(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
            email:true
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        invitation: {
          select: {
            id: true,
            status: true,
          },
        },

        roles: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;

  }


}
