import { Document } from 'mongoose';
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";
import { PokemonConfig } from "src/types/pokemon.config";

@Controller('pokemon')
export class PokemonController {
  constructor(
    private pokemonService: PokemonService
  ) {}

  @Post('new')
  async create(
    @Body() pokemon: PokemonConfig): Promise<Document<PokemonConfig>> {
    try {
      const result = await this.pokemonService.create(pokemon);
      return result;
    } 
    catch (error) {
      return error.message;
    }
  }

  @Get('cards')
  async getAll(): Promise<Document<PokemonConfig>[]> {
    try {
      const result = await this.pokemonService.getAll();
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
      return error.message;
    }
  }

  @Patch('update/:target')
  async update(
    @Param('target') id:number, 
    @Body() pokemon: PokemonConfig): Promise<string> {
    try {
      await this.pokemonService.update(id, pokemon)
      return `Card id ${id} updated successfully`;
    } 
    catch (error) {
      return error.message;
    }
  }

  @Delete('delete/:target')
  async delete(
    @Param('target') id:number): Promise<string> {
    try {
      await this.pokemonService.delete(id)
      return `Card id ${id} removed from database`;
    } 
    catch (error) {
      return error.message;
    }
  }
}