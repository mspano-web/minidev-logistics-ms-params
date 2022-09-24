import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

/* --------------------------------------------- */

async function bootstrap() {

  const appContext = await NestFactory.createApplicationContext(AppModule);
  const configService = appContext.get(ConfigService);
  const host = configService.get<string>('PARAM_HOST');
  const port = configService.get<string>('PARAM_PORT');

  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [`${host}:${port}`],
      },
      consumer: {
        groupId: 'param-consumer',
      },
    }};

  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions
  );

  await app.listen();
}

/* --------------------------------------------- */

bootstrap();

