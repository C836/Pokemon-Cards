import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  pokemons: Pokemon[] = [];

  create(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
    return pokemon
  }

  getAll() {
    return this.pokemons;
  }

  get(id: number) {
    return this.pokemons.find(card => card.id === id);
  }

  update(id: number, pokemon: Pokemon) {
    const target = this.pokemons.findIndex(card => card.id === id);
    this.pokemons[target] = pokemon
    return pokemon
  }
}
