import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GlobalModule } from './global/global.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GlobalModule,
    HelloModule,
  ],
})
export class AppModule {}
