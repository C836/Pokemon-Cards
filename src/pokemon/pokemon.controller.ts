import { Document } from 'mongoose';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";
import { PokemonConfig } from "src/types/pokemon.config";

@Controller('pokemon')
export class PokemonController {
  constructor(
    private pokemonService: PokemonService
  ) {}

  @Post('new')
  async create(@Body() pokemon: PokemonConfig): Promise<Document<PokemonConfig>> {
    return this.pokemonService.create(pokemon);
  }

  @Get('cards')
  async getAll(): Promise<Document<PokemonConfig>[]> {
    return this.pokemonService.getAll()
  }

  @Get('card/:id')
  async get(@Param('id') id: number): Promise<Document<PokemonConfig>> {
    return this.pokemonService.get(id)
  }

  @Put('update/:target')
  async update(
    @Param('target') id:number, 
    @Body() pokemon: PokemonConfig): Promise<string> {
    return this.pokemonService.update(id, pokemon)
  }

  @Delete('delete/:target')
  async delete(@Param('target') id:number): Promise<string> {
    return this.pokemonService.delete(id)
  }
}