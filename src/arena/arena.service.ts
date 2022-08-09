import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'moongose'

import { BattleSystem } from './arena.system';

@Injectable()
export class ArenaService {
  constructor(@InjectModel('Arena') private readonly BattleModel: Model<BattleSystem>) {}

  async battle(result: BattleSystem) {
    this.BattleModel(result).save();

    return result
  }

  async getLogs(id: number) {
    const result = await this.BattleModel.find({
      $or:[{'data.pokemon': id},{'data.opponent': id}]
    });

    return result
  }
}
