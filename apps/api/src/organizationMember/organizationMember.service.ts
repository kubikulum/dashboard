import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationMemberServiceBase } from "./base/organizationMember.service.base";

@Injectable()
export class OrganizationMemberService extends OrganizationMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
