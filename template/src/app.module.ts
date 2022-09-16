import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TodoModule,
  ],
})
export class AppModule {}
