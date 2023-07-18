import { Test, TestingModule } from '@nestjs/testing';

import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

describe('HelloController', () => {
  let helloController: HelloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();

    helloController = module.get<HelloController>(HelloController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await helloController.getHello()).toStrictEqual({
        message: 'Hello World!',
      });
    });
  });
});
