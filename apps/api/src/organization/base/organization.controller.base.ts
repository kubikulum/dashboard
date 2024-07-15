/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OrganizationService } from "../organization.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrganizationCreateInput } from "./OrganizationCreateInput";
import { Organization } from "./Organization";
import { OrganizationFindManyArgs } from "./OrganizationFindManyArgs";
import { OrganizationWhereUniqueInput } from "./OrganizationWhereUniqueInput";
import { OrganizationUpdateInput } from "./OrganizationUpdateInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ClusterFindManyArgs } from "../../cluster/base/ClusterFindManyArgs";
import { Cluster } from "../../cluster/base/Cluster";
import { ClusterWhereUniqueInput } from "../../cluster/base/ClusterWhereUniqueInput";
import { InvitationFindManyArgs } from "../../invitation/base/InvitationFindManyArgs";
import { Invitation } from "../../invitation/base/Invitation";
import { InvitationWhereUniqueInput } from "../../invitation/base/InvitationWhereUniqueInput";
import { OrganizationMemberFindManyArgs } from "../../organizationMember/base/OrganizationMemberFindManyArgs";
import { OrganizationMember } from "../../organizationMember/base/OrganizationMember";
import { OrganizationMemberWhereUniqueInput } from "../../organizationMember/base/OrganizationMemberWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrganizationControllerBase {
  constructor(
    protected readonly service: OrganizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
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
  async createOrganization(
    @common.Body() data: OrganizationCreateInput
  ): Promise<Organization> {
    return await this.service.createOrganization({
      data: {
        ...data,

        owner: data.owner
          ? {
              connect: data.owner,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        gardenerProjectNamespace: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Organization] })
  @ApiNestedQuery(OrganizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async organizations(@common.Req() request: Request): Promise<Organization[]> {
    const args = plainToClass(OrganizationFindManyArgs, request.query);
    return this.service.organizations({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        gardenerProjectNamespace: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async organization(
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Organization | null> {
    const result = await this.service.organization({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        gardenerProjectNamespace: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOrganization(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() data: OrganizationUpdateInput
  ): Promise<Organization | null> {
    try {
      return await this.service.updateOrganization({
        where: params,
        data: {
          ...data,

          owner: data.owner
            ? {
                connect: data.owner,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,

          owner: {
            select: {
              id: true,
            },
          },

          gardenerProjectNamespace: true,
        },
      });
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
  @common.Get("/:id/members")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findMembers(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findMembers(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        email: true,
        roles: true,
        organization: true,
        lastName: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/members")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async connectMembers(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      members: {
        connect: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/members")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateMembers(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      members: {
        set: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/members")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async disconnectMembers(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      members: {
        disconnect: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/clusters")
  @ApiNestedQuery(ClusterFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Cluster",
    action: "read",
    possession: "any",
  })
  async findClusters(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Cluster[]> {
    const query = plainToClass(ClusterFindManyArgs, request.query);
    const results = await this.service.findClusters(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        clusterType: true,

        organization: {
          select: {
            id: true,
          },
        },

        plan: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/clusters")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async connectClusters(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: ClusterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      clusters: {
        connect: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/clusters")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateClusters(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: ClusterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      clusters: {
        set: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/clusters")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async disconnectClusters(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: ClusterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      clusters: {
        disconnect: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/invitations")
  @ApiNestedQuery(InvitationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "read",
    possession: "any",
  })
  async findInvitations(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Invitation[]> {
    const query = plainToClass(InvitationFindManyArgs, request.query);
    const results = await this.service.findInvitations(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        status: true,
        expirationDate: true,

        organization: {
          select: {
            id: true,
          },
        },

        inviter: {
          select: {
            id: true,
          },
        },

        code: true,
        role: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/invitations")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async connectInvitations(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: InvitationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invitations: {
        connect: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/invitations")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateInvitations(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: InvitationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invitations: {
        set: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/invitations")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async disconnectInvitations(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: InvitationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invitations: {
        disconnect: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/organizationMembers")
  @ApiNestedQuery(OrganizationMemberFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrganizationMember",
    action: "read",
    possession: "any",
  })
  async findOrganizationMembers(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<OrganizationMember[]> {
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
          },
        },

        organization: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/organizationMembers")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async connectOrganizationMembers(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: OrganizationMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizationMembers: {
        connect: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/organizationMembers")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateOrganizationMembers(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: OrganizationMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizationMembers: {
        set: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/organizationMembers")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async disconnectOrganizationMembers(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: OrganizationMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizationMembers: {
        disconnect: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }
}
