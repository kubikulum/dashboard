import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvitationServiceBase } from "./base/invitation.service.base";

@Injectable()
export class InvitationService extends InvitationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async addUserToOrganization(
    userId: string,
    organizationId: string
  ): Promise<void> {
     this.prisma.organization.update({where: {id: organizationId}, data: {members: {connect: {id: userId}}}});
  }
}
