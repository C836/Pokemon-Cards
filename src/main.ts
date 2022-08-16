import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Pokemon Cards')
    .setDescription('Todas as requisições relacionadas aos cards são feitas atráves do ID único do pokémon, de acordo com a [pokédex oficial](https://www.pokemon.com/br/pokedex/).')
    .addTag('Pokemon', 'Operações relacionadas aos cards dos pokémons.')
    .addTag("Comparison", "Rotas para comparações de stats dos cards. Utiliza os cards registrados no banco de dados para consulta de atributos.")
    .addTag('Arena', 'Rotas para batalhas entre pokémons. Faz uso dos tipos e atributos para calculos de dano. Retorna um log completo dos turnos juntamente com o card vendedor.') 
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
