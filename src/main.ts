import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const logger = new Logger('Main')
  const app = await NestFactory.create(AppModule);
  await app.listen(env.port);
  logger.log(`App running on port: ${env.port}`);
}
bootstrap();
