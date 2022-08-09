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
    try {
      const result = await new this.PokemonModel(pokemon).save();
      return result;
    } 
    catch (error) {
      return error.message;
    }
  }

  async getAll() {
    try {
      const result = await this.PokemonModel.find();
      return result;
    } 
    catch (error) {
      return error.message;
    }
  }

  async get(id: number) {
    try {
      const result = await this.PokemonModel.findOne({ id: id }).orFail();
      return result;
    } 
    catch (error) {
      return error.message;
    }
  }

  async update(id: number, pokemon: PokemonConfig) {
    try {
      await this.PokemonModel.updateOne({ id: id }, pokemon).orFail();
      return `Card id ${id} updated successfully`;
    } 
    catch (error) {
      return error.message;
    }
  }

  async delete(id: number) {
    try {
      await this.PokemonModel.deleteOne({ id: id }).orFail();
      return `Card id ${id} removed from database`;
    } 
    catch (error) {
      return error.message;
    }
  }
}
