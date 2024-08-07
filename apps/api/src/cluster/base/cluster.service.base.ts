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
  Cluster as PrismaCluster,
  Organization as PrismaOrganization,
} from "@prisma/client";

export class ClusterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ClusterCountArgs, "select">): Promise<number> {
    return this.prisma.cluster.count(args);
  }

  async clusters(args: Prisma.ClusterFindManyArgs): Promise<PrismaCluster[]> {
    return this.prisma.cluster.findMany(args);
  }
  async cluster(
    args: Prisma.ClusterFindUniqueArgs
  ): Promise<PrismaCluster | null> {
    return this.prisma.cluster.findUnique(args);
  }
  async createCluster(args: Prisma.ClusterCreateArgs): Promise<PrismaCluster> {
    return this.prisma.cluster.create(args);
  }
  async updateCluster(args: Prisma.ClusterUpdateArgs): Promise<PrismaCluster> {
    return this.prisma.cluster.update(args);
  }
  async deleteCluster(args: Prisma.ClusterDeleteArgs): Promise<PrismaCluster> {
    return this.prisma.cluster.delete(args);
  }
}
