import { Test, TestingModule } from '@nestjs/testing';
import { Web3payService } from './web3pay.service';

describe('Web3payService', () => {
  let service: Web3payService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Web3payService],
    }).compile();

    service = module.get<Web3payService>(Web3payService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
