import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  pokemons: Pokemon[] = [];
}
