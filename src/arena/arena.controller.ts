import { Controller, Post, Param, Query, Get} from "@nestjs/common";

import { PokemonService } from "src/pokemon/pokemon.service";
import { ArenaService } from "./arena.service";
import { BattleSystem } from "./arena.system";

@Controller('arena')
export class ArenaController {
  constructor(
    private arenaService: ArenaService,
    private pokemonService: PokemonService
  ) {}

  @Post('/:pokemon')
  async battle(
    @Param('pokemon') pokemonId: number,
    @Query('vs') opponentId: number): Promise<BattleSystem> {
    
    const Pokemon = await this.pokemonService.get(pokemonId);
    const Opponent = await this.pokemonService.get(opponentId); 
    
    const result = new BattleSystem(Pokemon, Opponent);
    return this.arenaService.battle(result)
  }

  @Get('/log/:pokemon')
  async getLog(
    @Param('pokemon') pokemonId: number): Promise<BattleSystem> {
    
    const logs = await this.arenaService.getLogs(pokemonId);
    
    return logs;
  }
}