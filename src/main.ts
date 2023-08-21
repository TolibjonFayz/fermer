import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT;

    const config = new DocumentBuilder()
      .setTitle('FERMA')
      .setDescription('A project named FERMA, It helps to systematize a ferma')
      .setVersion('1.0')
      .addTag('NestJS, MongoDB, Sequelize')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);

    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());

    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
