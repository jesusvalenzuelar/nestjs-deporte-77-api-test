import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /** Session and Passport configuration */
  app.use(
    session({
      secret: 'keyboard',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  /** End of Session configuration*/

  /** Swagger configuration */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Deporte 77 REST API')
    .setDescription(
      'Servicio REST API para el blog de noticias deportivas Deporte 77',
    )
    .setVersion('1.0')
    .addTag('Deporte77')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);
  /** End of Swagger configuration */

  //Starts listening for shutdown hooks
  app.enableShutdownHooks();

  //start listening
  await app.listen(3000);
}
bootstrap();
