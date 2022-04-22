import { NestFactory } from '@nestjs/core';
import { TransformDataInterceptor } from 'common/interceptors/transform-data.interceptor';
import { ApiModule } from './modules/api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  app.useGlobalInterceptors(new TransformDataInterceptor());

  await app.listen(3000);
}
bootstrap();
