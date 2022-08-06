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

  async getAll() {
    return await this.PokemonModel.find();
  }

  async get(id: number) {
    return await this.PokemonModel.findOne({id: id});
  }

  async update(id: number, pokemon: Pokemon) {
    return await this.PokemonModel.updateOne({id: id}, pokemon)
  }

  async delete(id: number) {
    return await this.PokemonModel.deleteOne({id: id})
  }
}
