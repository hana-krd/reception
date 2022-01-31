import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../config/grpc-client.options';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserSerializer } from './services/user.serializer';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  providers: [UsersService, UserSerializer],
  controllers: [UsersController],
})
export class UsersModule {}
