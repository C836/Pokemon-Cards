import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { ComparisonService } from './comparison.service';
import { ComparisonSystem } from './comparison.system';

import { PokemonService } from 'src/pokemon/pokemon.service';

@Controller('comparison')
export class ComparisonController {
  constructor(
    private comparisonService: ComparisonService,
    private pokemonService: PokemonService,
  ) {}

  @Post('/:id')
  @ApiOperation({
    summary: 'Rota para comparação de cards',
  })
  @ApiResponse({
    status: 409,
    description:
      'A comparação resultou em um empate e não foi registrada no banco de dados',
  })
  @ApiResponse({
    status: 404,
    description: 'Id não encontrado no banco de dados',
  })
  @ApiResponse({
    status: 201,
    description:
      'Retorna o resultado da comparação e envia para o bando de dados',
  })
  async battle(
    @Param('id') pokemonId: number,
    @Query('vs') opponentId: number,
  ): Promise<ComparisonSystem | NotFoundException | ConflictException> {
    try {
      const Pokemon = await this.pokemonService.get(pokemonId);
      const Opponent = await this.pokemonService.get(opponentId);

      const result = new ComparisonSystem(Pokemon, Opponent);

      if (result.data) {
        return this.comparisonService.comparison(result);
      } else {
        return new ConflictException('Draw');
      }
    } catch (error) {
      return new NotFoundException(error.message);
    }
  }

  @Get('/search/:id')
  @ApiOperation({
    summary: 'Consultas de resultados de comparações anteriores',
  })
  @ApiResponse({
    status: 404,
    description: 'Id não encontrado no banco de dados',
  })
  @ApiResponse({
    status: 201,
    description:
      'Retorna todos os registros de comparações do pokémon selecionado',
  })
  async getLog(
    @Param('id') pokemonId: number,
  ): Promise<ComparisonSystem[] | NotFoundException> {
    try {
      const logs = await this.comparisonService.search(pokemonId);
      return logs;
    } catch (error) {
      return new NotFoundException(error.message);
    }
  }
}
