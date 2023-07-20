import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { HealthController } from './health.controller';

@Module({
  imports: [
    TerminusModule,
    HttpModule.register({ timeout: 5000, maxRedirects: 5 }),
  ],
  controllers: [HealthController],
})
export class HealthModule {}
