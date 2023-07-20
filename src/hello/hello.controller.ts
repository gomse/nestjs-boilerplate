import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { HelloService } from './hello.service';

@Controller('hello')
@ApiTags('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  @ApiOperation({ summary: 'Hello world' })
  @ApiOkResponse({ description: 'Success' })
  async getHello() {
    return this.helloService.world();
  }
}
