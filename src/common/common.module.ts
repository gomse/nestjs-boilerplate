import { Global, Module } from '@nestjs/common';

import { PrismaService } from './providers/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class CommonModule {}
