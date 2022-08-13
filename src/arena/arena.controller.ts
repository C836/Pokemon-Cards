import { Controller, Post, Param, Query, Get, NotFoundException } from '@nestjs/common';

import { PokemonService } from 'src/pokemon/pokemon.service';
import { ArenaService } from './arena.service';
import { BattleSystem } from './arena.system';

import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('arena')
export class ArenaController {
  constructor(
    private arenaService: ArenaService,
    private pokemonService: PokemonService,
  ) {}

  @Post('/:id')
  @ApiOperation({ 
    summary: 'Rota de batalhas' })
  @ApiResponse({
    status: 404,
    description: 'Id não encontrado no banco de dados',
  })
  @ApiResponse({
    status: 201,
    description: 'Retorna um log completo da batalha e envia para o bando de dados',
  })
  async battle(
    @Param('id') pokemonId: number,
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

  @Get('/log/:id')
  @ApiOperation({ 
    summary: 'Consultas de resultados de batalhas anteriores' })
  @ApiResponse({
    status: 404,
    description: 'Id não encontrado no banco de dados',
  })
  @ApiResponse({
    status: 201,
    description: 'Retorna todos os registros de batalha do pokémon selecionado',
  })
  async getLog(@Param('id') pokemonId: number): Promise<BattleSystem[] | NotFoundException> {

    try {
      const logs = await this.arenaService.getLogs(pokemonId);
      return logs

    } catch(error) {
      return new NotFoundException(error.message)

    }
  
 
      

    
  }
}
