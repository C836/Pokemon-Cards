import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonSchema } from '../schemas/pokemon.schema'
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Pokecards', schema: PokemonSchema}])],
  controllers: [PokemonController],
  providers: [PokemonService],
  exports: [PokemonService]
})
export class PokemonModule {}
