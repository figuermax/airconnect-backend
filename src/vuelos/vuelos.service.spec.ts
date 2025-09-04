import { Test, TestingModule } from '@nestjs/testing';
import { VueloService } from './vuelos.service';

describe('VuelosService', () => {
  let service: VueloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VueloService],
    }).compile();

    service = module.get<VueloService>(VueloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
