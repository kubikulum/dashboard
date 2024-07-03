import { createParamDecorator } from '@nestjs/common';

export const AuthJwtToken = createParamDecorator((data, req) => {
	const headers = req.switchToHttp().getRequest().headers;
	const jwt =headers['authorization'].replace('Bearer ', '');
  return jwt;
});