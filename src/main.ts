import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Pokemon Cards')
    .setDescription("Todas as requisições relacionadas aos cards são feitas atráves do ID único do pokémon, de acordo com a [pokédex oficial](https://www.pokemon.com/br/pokedex/).")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document)

  app.enableCors()
  await app.listen(3300);
}
bootstrap();
