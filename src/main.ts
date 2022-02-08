import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllHttpExceptionsFilter, HttpValidationException, JsendInterceptor } from './common';
import { grpcClientOptions } from './config/grpc-client.options';
import { serverOptions } from './config/server.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      validationError: {
        target: true,
        value: true,
      },
      exceptionFactory: (errors) => new HttpValidationException(errors),
    }),
  )

  // Add JSend exception filters
  const filter = app.get<AllHttpExceptionsFilter>(AllHttpExceptionsFilter)
  app.useGlobalFilters(filter)

  // Add JSend interceptors
  app.useGlobalInterceptors(new JsendInterceptor())

  app.enableCors(serverOptions.cors)
  
  const config = new DocumentBuilder()
    .setTitle('Clinic Document')
    .setDescription('The Clinic API description')
    .setVersion('1.0')
    .addTag('Reception')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(serverOptions.port);
}
bootstrap();
