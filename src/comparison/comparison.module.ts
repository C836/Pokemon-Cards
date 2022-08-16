import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ComparisonSchema } from 'src/schemas/comparison.schema';
import { ComparisonController } from './comparison.controller';
import { ComparisonService } from './comparison.service';

import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Comparison', schema: ComparisonSchema}]), PokemonModule],
  controllers: [ComparisonController],
  providers: [ComparisonService]
})
export class ComparisonModule {}
