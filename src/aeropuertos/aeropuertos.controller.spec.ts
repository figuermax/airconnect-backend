import { Test, TestingModule } from '@nestjs/testing';
import { AeropuertosController } from './aeropuertos.controller';

describe('AeropuertosController', () => {
  let controller: AeropuertosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AeropuertosController],
    }).compile();

    controller = module.get<AeropuertosController>(AeropuertosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
