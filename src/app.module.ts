import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Web3payModule } from './web3pay/web3pay.module';

@Module({
  imports: [Web3payModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
