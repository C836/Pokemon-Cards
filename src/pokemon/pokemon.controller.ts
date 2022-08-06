import { Body, Controller, Get, Post } from "@nestjs/common";
import { Pokemon } from "./pokemon";
import { PokemonService } from "./pokemon.service";

@Controller('pokemon')
export class PokemonController {
  constructor(
    private pokemonService: PokemonService
  ) {}

  @Post('new')
  async create(@Body() pokemon: Pokemon): Promise<Pokemon> {
    return this.pokemonService.create(pokemon);
  }

  @Get('cards')
  async getAll(): Promise<Pokemon[]> {
    return this.pokemonService.getAll()
  }
}