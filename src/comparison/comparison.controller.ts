import { Controller, Post, Param, Query, Get, NotFoundException, ConflictException } from '@nestjs/common';

import { PokemonService } from 'src/pokemon/pokemon.service';
import { ComparisonService } from './comparison.service';
import { ComparisonSystem } from './comparison.system';

@Controller('comparison')
export class ComparisonController {
  constructor(
    private comparisonService: ComparisonService,
    private pokemonService: PokemonService,
  ) {}

  @Post('/:pokemon')
  async battle(
    @Param('pokemon') pokemonId: number,
    @Query('vs') opponentId: number): Promise<ComparisonSystem | NotFoundException | ConflictException> {

    try {
      const Pokemon = await this.pokemonService.get(pokemonId);
      const Opponent = await this.pokemonService.get(opponentId);

      const result = new ComparisonSystem(Pokemon, Opponent);

      console.log(result)

      if(result.data) {
        return this.comparisonService.comparison(result);
      } else {
        return new ConflictException("Draw")
      } 
      
    } catch (error) {
        return new NotFoundException(error.message)
        
    }
  }

  @Get('/search/:pokemon')
  async getLog(@Param('pokemon') pokemonId: number): Promise<ComparisonSystem[] | NotFoundException> {

    try {
      const logs = await this.comparisonService.search(pokemonId);
      return logs

    } catch(error) {
      return new NotFoundException(error.message)

    }

  }
}
