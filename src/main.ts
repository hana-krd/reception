import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { grpcClientOptions } from './config/grpc-client.options';
import { serverOptions } from './config/server.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(serverOptions.cors);
  await app.listen(serverOptions.port);
}
bootstrap();
