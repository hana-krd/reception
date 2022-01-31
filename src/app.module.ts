import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mongoOption } from './config/mongodb.options';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(mongoOption.uri),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
