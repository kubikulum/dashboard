import { Injectable, OnModuleInit, INestApplication } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // this.$extends({
    //   query:{
    //     user:{
    //       async findMany({ model, operation, args, query }) {
    //         args.where = { ...args.where, organizations: { some: { id: args.organizationsId } } }
    //         return query(args)
    //       },
    //     }
    //   }
    // })
    await this.$connect();
  }
}
