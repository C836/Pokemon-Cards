import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import 'dotenv/config';

import { PokemonModule } from './pokemon/pokemon.module';
import { ComparisonModule } from './comparison/comparison.module';
import { ArenaModule } from './arena/arena.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_COLLECTION}`),
    PokemonModule,
    ComparisonModule,
    ArenaModule,
  ],
})
export class AppModule {}
