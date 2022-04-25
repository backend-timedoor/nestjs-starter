import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { BadRequestExceptionFilter } from 'common/exception-filter/bad-request-exception.filter';
import { TransformDataInterceptor } from 'common/interceptors/transform-data.interceptor';
import { ApiModule } from './modules/api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  app.useGlobalInterceptors(new TransformDataInterceptor());

  app.useGlobalPipes(new ValidationPipe({
    stopAtFirstError: true,
    exceptionFactory: (errors: ValidationError[] = []) => {
      return new BadRequestException(errors);
    }
  }));

  app.useGlobalFilters(new BadRequestExceptionFilter());

  await app.listen(3000);
}
bootstrap();
