import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllHttpExceptionsFilter } from './common';
import { mongoOption } from './config/mongodb.options';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(mongoOption.uri),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, AllHttpExceptionsFilter],
})
export class AppModule {}
