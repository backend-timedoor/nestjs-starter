import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { svelteTemplateEngine } from './svelte-template-engine';
import { WebModule } from './modules/web.module';
import * as csrf from 'csurf';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(WebModule);

  setupCsrf(app);
  setupViewEngine(app);

  await app.listen(8000);
}

function setupCsrf(app: NestExpressApplication) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(csrf({ cookie: true }));
}

function setupViewEngine(app: NestExpressApplication) {
  app.engine('svelte', svelteTemplateEngine)

  app.setViewEngine('svelte');
  app.setBaseViewsDir('apps/web/src/views');
  app.useStaticAssets('apps/web/src/public');
}

bootstrap();
