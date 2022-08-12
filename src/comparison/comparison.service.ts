import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ComparisonSystem } from './comparison.system';

@Injectable()
export class ComparisonService {
  constructor(
    @InjectModel('Comparison')
    private readonly ComparisonModel: Model<ComparisonSystem>,
  ) {}

  async comparison(result: ComparisonSystem) {
    const data = await new this.ComparisonModel(result).save();
    return data;
  }

  async search(id: number) {
    const result = await this.ComparisonModel.find({
      $or: [{ 'data.winner': id }, { 'data.loser': id }],
    }).orFail();

    return result;
  }
}
