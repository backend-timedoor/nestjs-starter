import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { RequestWithCsrf } from "common/interfaces/request-with-csrf.interface";
import { map, Observable } from "rxjs";

@Injectable()
export class CsrfInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest<RequestWithCsrf>();

        return next.handle().pipe(map(data => {
            data.csrfToken = request.csrfToken();

            return data;
        }));
    }
}