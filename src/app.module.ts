import { Module } from '@nestjs/common';

import { GlobalModule } from './global/global.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [GlobalModule, HelloModule],
})
export class AppModule {}
