import { Test, TestingModule } from '@nestjs/testing';
import { Web3payController } from './web3pay.controller';

describe('Web3payController', () => {
  let controller: Web3payController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Web3payController],
    }).compile();

    controller = module.get<Web3payController>(Web3payController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
