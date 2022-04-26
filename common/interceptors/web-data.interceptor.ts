import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Request } from "express";
import { map, Observable } from "rxjs";

@Injectable()
export class WebDataInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest<Request>();

        return next.handle().pipe(map(data => {
            // todo: need to update this
            data.url = 'http://' + request.get('host') + request.baseUrl;

            return data;
        }));
    }
}