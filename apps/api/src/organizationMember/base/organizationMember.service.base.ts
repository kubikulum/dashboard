/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  OrganizationMember as PrismaOrganizationMember,
  User as PrismaUser,
  Organization as PrismaOrganization,
  Invitation as PrismaInvitation,
} from "@prisma/client";

export class OrganizationMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OrganizationMemberCountArgs, "select">
  ): Promise<number> {
    return this.prisma.organizationMember.count(args);
  }

  async organizationMembers(
    args: Prisma.OrganizationMemberFindManyArgs
  ): Promise<PrismaOrganizationMember[]> {
    return this.prisma.organizationMember.findMany(args);
  }
  async organizationMember(
    args: Prisma.OrganizationMemberFindUniqueArgs
  ): Promise<PrismaOrganizationMember | null> {
    return this.prisma.organizationMember.findUnique(args);
  }
  async createOrganizationMember(
    args: Prisma.OrganizationMemberCreateArgs
  ): Promise<PrismaOrganizationMember> {
    return this.prisma.organizationMember.create(args);
  }
  async updateOrganizationMember(
    args: Prisma.OrganizationMemberUpdateArgs
  ): Promise<PrismaOrganizationMember> {
    return this.prisma.organizationMember.update(args);
  }
  async deleteOrganizationMember(
    args: Prisma.OrganizationMemberDeleteArgs
  ): Promise<PrismaOrganizationMember> {
    return this.prisma.organizationMember.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.organizationMember
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getOrganization(parentId: string): Promise<PrismaOrganization | null> {
    return this.prisma.organizationMember
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getInvitation(parentId: string): Promise<PrismaInvitation | null> {
    return this.prisma.organizationMember
      .findUnique({
        where: { id: parentId },
      })
      .invitation();
  }
}
