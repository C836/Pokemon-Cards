import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

import { BattleSystem } from './arena.system';

@Injectable()
export class ArenaService {
  constructor(@InjectModel('Arena') private readonly BattleModel: Model<BattleSystem>) {}


  async battle(result: BattleSystem) {
      const data = await new this.BattleModel(result).save();
      return data;
  }

  async getLogs(id: number) {

      const result = await this.BattleModel.find({$or:[{'data.winner': id},{'data.loser': id}]}).orFail();

        return result
      
  }
}
