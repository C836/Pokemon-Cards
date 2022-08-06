import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'moongose'

import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  constructor(@InjectModel('Pokecards') private readonly PokemonModel: Model<Pokemon>) {}

  pokemons: Pokemon[] = [];

  async create(pokemon: Pokemon) {
    const created = new this.PokemonModel(pokemon)

    return await created.save()
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

  delete(id: number) {
    const target = this.pokemons.findIndex(card => card.id === id);
    this.pokemons.splice(target, 1)
    return this.pokemons[target]
  }
}
