import { Document, Error } from 'mongoose';
import { BadRequestException, Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";
import { PokemonConfig } from "src/types/pokemon.config";

@Controller('pokemon')
export class PokemonController {
  constructor(
    private pokemonService: PokemonService
  ) {}

  @Post('new')
  async create(
    @Body() pokemon: PokemonConfig): Promise<Document<PokemonConfig> | BadRequestException | ConflictException> {

    try { 
      await this.pokemonService.get(pokemon.id);
      return new ConflictException('Id already registered in database');
    } 
    catch(error) {
      try {
        const result = await this.pokemonService.create(pokemon);
        return result;
      } 
      catch (error) {
        return new BadRequestException(error.message);
      }
    }
      
  }

  @Get('cards/:page?')
  async getAll(
    @Param('page') page: number): Promise<Document<PokemonConfig>[]> {
    try {
      const result = await this.pokemonService.getAll(page);
      return result;
    } 
    catch (error) {
      return error.message;
    }
  }

  @Get('card/:id')
  async get(
    @Param('id') id: number): Promise<Document<PokemonConfig>> {
    try {
      const result = await this.pokemonService.get(id);
      return result;
    } 
    catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch('update/:target')
  async update(
    @Param('target') id:number, 
    @Body() pokemon: PokemonConfig): Promise<string | NotFoundException | BadRequestException> {
    try {
      await this.pokemonService.update(id, pokemon)
      return `Card id ${id} updated successfully`;
    }
    catch (error) {
      if(error instanceof Error.DocumentNotFoundError) {
        return new NotFoundException(error.message)
      } else if (error instanceof Error.CastError){
        return new BadRequestException(error.message)
      }
    }
  }

  @Delete('delete/:target')
  async delete(
    @Param('target') id:number): Promise<string | NotFoundException> {
    try {
      await this.pokemonService.delete(id)
      return `Card id ${id} removed from database`;
    } 
    catch (error) {

        return new NotFoundException(error.message)

    }
  }
}