import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

import { ArenaModule } from './arena/arena.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@pokecards.uz4nbjp.mongodb.net/?retryWrites=true&w=majority`,
    ),
    PokemonModule,
    ArenaModule
  ],
})
export class AppModule {}
