import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: process.env.CENTRAL_RECORD_URL,
    package: 'user', // ['hero', 'hero2']
    protoPath: join(__dirname, './../users/user.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
  },
};