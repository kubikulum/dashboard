import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";



@Injectable()
export class QueryToJsonInterceptor implements NestInterceptor {
  constructor(
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const request = context.switchToHttp().getRequest();
    if(request.query && request.query.where){
      request.query.where = JSON.parse(request.query.where);
    
    }
    return next.handle();
  }
}
