import { Module } from '@nestjs/common';
import { Web3payController } from './web3pay.controller';
import { Web3payService } from './web3pay.service';

@Module({
  controllers: [Web3payController],
  providers: [Web3payService],
})
export class Web3payModule {}
