import { Controller, Post, Param, Query} from "@nestjs/common";

import { PokemonService } from "src/pokemon/pokemon.service";
import { ArenaService } from "./arena.service";

@Controller('arena')
export class ArenaController {
  constructor(
    private arenaService: ArenaService,
    private pokemonService: PokemonService
  ) {}

  @Post('/:pokemon')
  async battle(
    @Param('pokemon') pokemonId: number,
    @Query('vs') opponentId: number): Promise<any> {
    
    const Pokemon = await this.pokemonService.get(pokemonId);
    const Opponent = await this.pokemonService.get(opponentId); 
    
    return [Pokemon, Opponent]
  }
}