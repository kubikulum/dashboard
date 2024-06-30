import { Module, forwardRef } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt/jwt.strategy";
import { UserModule } from "../user/user.module";
import { HttpModule } from "@nestjs/axios";
import {AuthManagementService} from "./auth-management.service";

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: "jwt" }),
    HttpModule
  ],
  providers: [JwtStrategy,AuthManagementService],
  controllers: [],
  exports: [PassportModule],
})
export class AuthModule {}
