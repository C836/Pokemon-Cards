import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from 'src/pokemon/pokemon.module';

import { ComparisonSchema } from 'src/schemas/comparison.schema';
import { ComparisonController } from './comparison.controller';
import { ComparisonService } from './comparison.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Comparison', schema: ComparisonSchema}]), PokemonModule],
  controllers: [ComparisonController],
  providers: [ComparisonService]
})
export class ComparisonModule {}
