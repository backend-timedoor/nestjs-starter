import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { svelteTemplateEngine } from './svelte-template-engine';
import { WebModule } from './modules/web.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(WebModule);

  app.engine('svelte', svelteTemplateEngine)

  app.setViewEngine('svelte');
  app.setBaseViewsDir('apps/web/src/views');
  app.useStaticAssets('apps/web/src/public');

  await app.listen(8000);
}
bootstrap();
