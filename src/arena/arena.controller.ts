import { Controller, Post, Param, Query, Get, NotFoundException } from '@nestjs/common';

import { PokemonService } from 'src/pokemon/pokemon.service';
import { ArenaService } from './arena.service';
import { BattleSystem } from './arena.system';

@Controller('arena')
export class ArenaController {
  constructor(
    private arenaService: ArenaService,
    private pokemonService: PokemonService,
  ) {}

  @Post('/:pokemon')
  async battle(
    @Param('pokemon') pokemonId: number,
    @Query('vs') opponentId: number): Promise<BattleSystem | NotFoundException> {

    try {
      const Pokemon = await this.pokemonService.get(pokemonId);
      const Opponent = await this.pokemonService.get(opponentId);

      const result = new BattleSystem(Pokemon, Opponent);
      return this.arenaService.battle(result);
    } catch (error) {
        return new NotFoundException(error.message)
        
    }
  }

  @Get('/log/:pokemon')
  async getLog(@Param('pokemon') pokemonId: number): Promise<BattleSystem[] | NotFoundException> {

    try {
      const logs = await this.arenaService.getLogs(pokemonId);
      return logs

    } catch(error) {
      return new NotFoundException(error.message)

    }
  
 
      

    
  }
}
