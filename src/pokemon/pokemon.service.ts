import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'moongose'

import { PokemonConfig } from 'src/types/pokemon.config';

@Injectable()
export class PokemonService {
  constructor(@InjectModel('Pokecards') private readonly PokemonModel: Model<PokemonConfig>) {}

  pokemons: Pokemon[] = [];

  async create(pokemon: PokemonConfig) {
    this.PokemonModel(pokemon).save()

    return pokemon
  }

  async getAll() {
    return await this.PokemonModel.find();
  }

  async get(id: number) {
    return await this.PokemonModel.findOne({id: id});
  }

  async update(id: number, pokemon: PokemonConfig) {
    this.PokemonModel.updateOne({id: id}, pokemon);

    return `Card id ${id} updated successfully`
  }

  async delete(id: number) {
    this.PokemonModel.deleteOne({id: id});

    return `Card id ${id} removed from database`
  }
}
