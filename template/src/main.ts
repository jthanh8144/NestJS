import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dataSource from '@shared/configs/data-source.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(+process.env.PORT || 3000);
  await dataSource.initialize();
}
bootstrap();
