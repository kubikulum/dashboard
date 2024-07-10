import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClusterServiceBase } from "./base/cluster.service.base";

@Injectable()
export class ClusterService extends ClusterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
