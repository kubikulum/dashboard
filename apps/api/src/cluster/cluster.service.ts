import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClusterServiceBase } from "./base/cluster.service.base";

@Injectable()
export class ClusterService extends ClusterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  getProjectNamespace(organization_id:string){
    const name = organization_id.length > 10 ? organization_id.substring(0, 10) : organization_id;
    return `garden-${name}`
  }
}
