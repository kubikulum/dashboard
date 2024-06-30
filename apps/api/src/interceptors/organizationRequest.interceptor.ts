import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { InjectRolesBuilder, RolesBuilder } from "nest-access-control";
import { Reflector } from "@nestjs/core";
import * as abacUtil from "../auth/abac.util";
import { ForbiddenException } from "../errors";
import { Organization } from "src/organization/base/Organization";

@Injectable()
export class OrganizationRequestInterceptor implements NestInterceptor {
  constructor(
    @InjectRolesBuilder() private readonly rolesBuilder: RolesBuilder,
    private readonly reflector: Reflector
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const [permissionsRoles]: any = this.reflector.getAllAndMerge<string[]>(
      "roles",
      [context.getHandler(), context.getClass()]
    );

    const request = context.switchToHttp().getRequest();
    request.query.where = {...request.query.where, ...{organization:{equals: request.user.contextOrganizationId}}}

    return next.handle();
  }
}
