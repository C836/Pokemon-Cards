import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Query,
  Param,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiQuery, ApiParam } from '@nestjs/swagger';

import { Document, Error } from 'mongoose';

import { PokemonService } from './pokemon.service';
import { PokemonConfig, PokemonTypes } from 'src/types/pokemon.config';
import { typeCheck } from 'src/utils/typeCheck';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Post('new')
  @ApiOperation({
    summary: 'Adiciona um novo card de pokémon ao banco de dados',
  })
  @ApiResponse({
    status: 409,
    description: 'Pokémon com o id já registrado no banco de dados',
  })
  @ApiResponse({
    status: 400,
    description: 'Corpo da requisição invalido',
  })
  @ApiResponse({
    status: 201,
    description: 'Card registrado com sucesso',
  })
  async create(
    @Body() pokemon: PokemonConfig,
  ): Promise<Document<PokemonConfig> | BadRequestException | ConflictException> {

    try {
      await this.pokemonService.get(pokemon.id);
      throw new ConflictException('Id already registered in database');
    } 
    
    catch (error) {

      try {
        if(typeCheck(pokemon.type)) {
          const result = await this.pokemonService.create(pokemon);
        
          return result;
        }

        else {
          throw new BadRequestException("Invalid pokémon type");
        }
      } 
      
      catch (error) {
        throw new BadRequestException(error.message);
      }
    }
  }

  @Get('cards/:page?')
  @ApiOperation({
    summary: 'Operação para listagem de cartas',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista todas as entradas de acordo com os parâmetros selecionados',
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
  })
  @ApiQuery({
    name: 'type',
    enum: PokemonTypes,
    required: false,
  })
  async getAll(
    @Query('page') page?: number,
    @Query('type') type?: string,
  ): Promise<Document<PokemonConfig>[]> {

    try {
      const result = await this.pokemonService.getAll(page, type);
      return result;
    } 

    catch (error) {
      return error.message;
    }
  }

  @Get('card/:id')
  @ApiOperation({
    summary: 'Pesquisa de card por ID único',
  })
  @ApiResponse({
    status: 404,
    description: 'Id não encontrado no banco de dados',
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna o card selecionado',
  })
  @ApiParam({
    name: 'id',
    type: 'number',
  })
  async get(
    @Param('id') id: number,
  ): Promise<Document<PokemonConfig> | NotFoundException> {

    try {
      const result = await this.pokemonService.get(id);
      return result;
    } 

    catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch('update/:id')
  @ApiOperation({
    summary: 'Atualiza uma ou mais propriedades de um card',
  })
  @ApiResponse({
    status: 404,
    description: 'Id não encontrado no banco de dados',
  })
  @ApiResponse({
    status: 400,
    description: 'Corpo da requisição invalido',
  })
  @ApiResponse({
    status: 201,
    description: 'Card atualizado com sucesso',
  })
  @ApiParam({
    name: 'id',
    type: 'number',
  })
  async update(
    @Param('id') id: number,
    @Body() pokemon: PokemonConfig,
  ): Promise<string | NotFoundException | BadRequestException> {

    try {
      if(typeCheck(pokemon.type)) {
        await this.pokemonService.update(id, pokemon);
        
        return `Card id ${id} updated successfully`;
      }

      else {
        throw new BadRequestException("Invalid pokémon type");
      }
    }

    catch (error) {
      if (error instanceof Error.DocumentNotFoundError) {
        throw new NotFoundException(error.message);
      }

      else if (error instanceof Error.CastError) {
        throw new BadRequestException(error.message);
      }

      else if (error instanceof Error.ValidationError) {
        throw new BadRequestException(error.message);
      }
    }
  }

  @Delete('delete/:id')
  @ApiOperation({
    summary: 'Deleta um registro do banco de dados',
  })
  @ApiResponse({
    status: 404,
    description: 'Id não encontrado no banco de dados',
  })
  @ApiResponse({
    status: 201,
    description: 'Card deletado com sucesso',
  })
  async delete(
    @Param('id') id: number,
  ): Promise<string | NotFoundException> {

    try {
      await this.pokemonService.delete(id);
      return `Card id ${id} removed from database`;
    }

    catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
