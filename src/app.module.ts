import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HumansController } from './humans/humans.controller';

@Module({
  imports: [],
  controllers: [AppController, HumansController],
  providers: [AppService],
})
export class AppModule {}
