import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvitationServiceBase } from "./base/invitation.service.base";

@Injectable()
export class InvitationService extends InvitationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async isFromOrganization(organizationId:string, invitationId: string): Promise<boolean>{
    const invitation = await this.prisma.invitation.findFirst({where: {id: invitationId, organizationId: organizationId}});
    return invitation ? true : false;

  }
  
  // async addUserToOrganization(
  //   invitationId: string,
  // ): Promise<void> {
  //   const invitation = await this.prisma.invitation.findFirst({where: {id: invitationId}});
  //    this.prisma.invitation.update({where: {id: invitationId}, data: {
  //       organizationMembers:{
  //         create: {
  //           user: {
  //             connect: {
  //               id: invitation.
  //             }
  //           }
  //         }
  //       }
  //    }});
  // }
}
