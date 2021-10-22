import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://user_jhc_13:2cNTJF3qDhokwm6r@cluster0.zfesf.mongodb.net/test'),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
  