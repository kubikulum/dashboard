import { createParamDecorator, Injectable, CanActivate, ExecutionContext, mixin, BadRequestException, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

// Custom decorator to mark routes that don't require organization ID
export const AllowNoOrganization = () => SetMetadata('allowNoOrganization', true);

// Guard to check for organization ID
@Injectable()
export class RequireOrganizationGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Check if AllowNoOrganization decorator is present
    const allowNoOrganization = this.reflector.get<boolean>('allowNoOrganization', context.getHandler());
    if (allowNoOrganization) {
      return true;
    }

    if (!user || !user.contextOrganizationId) {
      throw new BadRequestException('Organization ID is required');
    }

    return true;
  }
}