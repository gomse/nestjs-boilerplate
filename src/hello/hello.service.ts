import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  async world() {
    return { message: 'Hello World!' };
  }
}
