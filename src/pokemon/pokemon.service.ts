import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

import { PokemonConfig } from 'src/types/pokemon.config';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel('Pokecards')
    private readonly PokemonModel: Model<Document<PokemonConfig>>,
  ) {}

  async create(pokemon: PokemonConfig) {
    const result = await new this.PokemonModel(pokemon).save();
    return result;
  }

  async getAll({page, type}) {
    const result = await this.PokemonModel.find(type && {type: type})
    .skip(page ? page * 20 : 0)
    .limit(20)
    .sort({ id: "asc" });
    return result
  }

  async get(id: number) {
    const result = await this.PokemonModel.findOne({ id: id }).orFail();
    return result;
  }

  async update(id: number, pokemon: PokemonConfig) {
    await this.PokemonModel.findOneAndUpdate({ id: id }, pokemon).orFail();
    return `Card id ${id} updated successfully`;
  }

  async delete(id: number) {
    await this.PokemonModel.deleteOne({ id: id }).orFail();
    return `Card id ${id} removed from database`;
  }
}
