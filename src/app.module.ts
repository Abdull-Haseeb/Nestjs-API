import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HumansController } from './humans/humans.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
  MongooseModule.forRoot('mongodb+srv://abdulprogrammer5:Ayshahid4$@cluster0.3yxzzx0.mongodb.net/nest')
  ],
  controllers: [AppController, HumansController],
  providers: [AppService],
})
export class AppModule {}
