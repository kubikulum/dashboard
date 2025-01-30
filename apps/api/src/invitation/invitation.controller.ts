import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InvitationService } from "./invitation.service";
import * as errors from "../errors";
import { InvitationControllerBase } from "./base/invitation.controller.base";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { Invitation } from "./base/Invitation";
import { InvitationFindManyArgs } from "./base/InvitationFindManyArgs";
import { ApiNestedQuery } from "src/decorators/api-nested-query.decorator";
import { InvitationWhereUniqueInput } from "./base/InvitationWhereUniqueInput";
import { OrganizationInvitationsService } from "src/logto-auth-management";
import { firstValueFrom } from "rxjs";
import { OrganizationService } from "src/organization/organization.service";
import { isRecordNotFoundError } from "src/prisma.util";
import { EnumOrganizationMemberStatus } from "src/organizationMember/base/EnumOrganizationMemberStatus";

@swagger.ApiTags("invitations")
@common.Controller("invitations")
export class InvitationController extends InvitationControllerBase {
  constructor(
    protected readonly service: InvitationService,
    protected readonly logtoManagementService: OrganizationInvitationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('pending')
  @swagger.ApiOkResponse({ type: [Invitation] })
  @ApiNestedQuery(InvitationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async pending(@common.Req() request: any): Promise<Invitation[]> {
    const result = await this.service.invitations({
      where: { status: { equals: 'PENDING' }, email: { equals: request.user.email } }, select: {

        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        status: true,
        expirationDate: true,
        code: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },

        inviter: {
          select: {
            id: true,
          },
        },
      }
    })
    console.log(result)
    return result
  }



  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Invitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "delete",
    possession: "any",
  }, {
    resource: "Invitation",
    action: "delete",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async revokeInvitation(
    @common.Req() request: any,
    @common.Param() params: InvitationWhereUniqueInput
  ): Promise<Invitation | null> {

    if (this.rolesBuilder.can(request.user?.roles).updateOwn('Invitation').granted) {
      const isFromCurrentOrganization = await this.service.isFromOrganization(request.user.contextOrganizationId, params.id)
      if (!isFromCurrentOrganization) {
        throw new errors.ForbiddenException(
          `You don't have permission to read this resource`
        );
      }
    }

    try {
      // const resultLogto = await firstValueFrom(this.logtoManagementService.deleteOrganizationInvitation(params.id))
      return await this.service.updateInvitation({
        where: { id: params.id }, data: {
          status: 'REVOKED',
          organizationMembers: {
            update: {
              where: { invitationId: params.id },
              data: { status: EnumOrganizationMemberStatus.InvitationRevoked },
            }
          }
        }
      })
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Post("/:id/resend")
  @swagger.ApiOkResponse({ type: Invitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "update",
    possession: "own",
  },
    {
      resource: "Invitation",
      action: "update",
      possession: "any",
    })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async resendInvitation(@common.Req() request: any, @common.Param() params: InvitationWhereUniqueInput,): Promise<Invitation> {

    if (this.rolesBuilder.can(request.user?.roles).updateOwn('Invitation').granted) {
      const isFromCurrentOrganization = await this.service.isFromOrganization(request.user.contextOrganizationId, params.id)
      if (!isFromCurrentOrganization) {
        throw new errors.ForbiddenException(
          `You don't have permission to read this resource`
        );
      }
    }

    const invitation = await this.service.invitation({ where: { id: params.id } })

    if (!invitation) {
      throw new errors.NotFoundException('Invitation not found')
    }
    if (invitation.status === 'ACCEPTED') {
      throw new errors.ForbiddenException('Invitation already accepted')
    }

    const resultLogto = await firstValueFrom(this.logtoManagementService.createOrganizationInvitationMessage(params.id, { code: invitation.code }))
    const result = await this.service.updateInvitation({
      where: { id: params.id },
      data: {
        status: 'PENDING', organizationMembers: {
          update: {
            where: { invitationId: params.id },
            data: { status: EnumOrganizationMemberStatus.PendingInvitation },
          }
        }
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        status: true,
        expirationDate: true,
        code: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },

        inviter: {
          select: {
            id: true,
          },
        },
      }
    })

    return result
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Post("/:id/accept")
  @swagger.ApiOkResponse({ type: Invitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "update",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async accept(@common.Req() request: any, @common.Param() params: InvitationWhereUniqueInput,): Promise<Invitation> {


    const invitation = await this.service.invitation({ where: { code: params.id ,organizationId: request.user.contextOrganizationId}})
    if (!invitation) {
      throw new errors.NotFoundException('Invitation not found')
    }

    if (invitation.expirationDate && (new Date(invitation.expirationDate) < new Date())) {
      throw new errors.ForbiddenException('Invitation expired')
    }

    // create member in organization
    const result = await this.service.updateInvitation({
      where: { code: params.id },
      data: {
        status: 'ACCEPTED',
        organizationMembers: {
          update: {
            where: { invitationId: invitation.id },
            data: { userId: request.user.id, status: EnumOrganizationMemberStatus.Activated},
          
          }
        }

      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        status: true,
        expirationDate: true,
        code: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },

        inviter: {
          select: {
            id: true,
          },
        },
      }
    })
    try {
      await firstValueFrom(this.logtoManagementService.replaceOrganizationInvitationStatus(result.id, { acceptedUserId: request.user.id, status: 'Accepted' }))
    } catch (e: any) {
      console.log(e.request)
      console.log(e.response.data.message)
      throw e
    }

    return result
  }

}
