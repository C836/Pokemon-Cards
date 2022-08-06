import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  pokemons: Pokemon[] = [];

  create(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
    return pokemon
  }
}
