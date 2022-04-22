import { applyDecorators, UseInterceptors } from "@nestjs/common";
import { CsrfInterceptor } from "common/interceptors/csrf.interceptor";

export function Csrf() {
    return applyDecorators(
        UseInterceptors(CsrfInterceptor)
    );
}