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
import { UserService } from "../user.service";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { User } from "./User";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { InvitationFindManyArgs } from "../../invitation/base/InvitationFindManyArgs";
import { Invitation } from "../../invitation/base/Invitation";
import { InvitationWhereUniqueInput } from "../../invitation/base/InvitationWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        email: true,
        roles: true,
        organization: {},
        lastName: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
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
  @common.Get("/:id/organizations")
  @ApiNestedQuery(OrganizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "own",
  })
  async findOrganizations(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Organization[]> {
    const query = plainToClass(OrganizationFindManyArgs, request.query);
    const results = await this.service.findOrganizations(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/organizations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectOrganizations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizations: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/organizations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateOrganizations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizations: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/organizations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectOrganizations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizations: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/ownerOrganizations")
  @ApiNestedQuery(OrganizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async findOwnerOrganizations(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Organization[]> {
    const query = plainToClass(OrganizationFindManyArgs, request.query);
    const results = await this.service.findOwnerOrganizations(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/ownerOrganizations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectOwnerOrganizations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ownerOrganizations: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/ownerOrganizations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateOwnerOrganizations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ownerOrganizations: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/ownerOrganizations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectOwnerOrganizations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ownerOrganizations: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
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
    @common.Param() params: UserWhereUniqueInput
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectInvitations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InvitationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invitations: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/invitations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateInvitations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InvitationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invitations: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/invitations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectInvitations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InvitationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invitations: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
