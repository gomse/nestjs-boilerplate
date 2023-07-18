import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  async test() {
    return { message: 'Hello World!' };
  }
}
