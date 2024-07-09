import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserServiceBase } from "./base/user.service.base";
import { Prisma } from "@prisma/client";
import { LogtoApiManagementModule, UsersService } from "src/logto-auth-management";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(protected readonly prisma: PrismaService ) {
  super(prisma);
  }

 


}
