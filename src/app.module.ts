import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [DatabaseModule, HelloModule],
})
export class AppModule {}
