import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'moongose'

import { TurnConfig } from 'src/types/arena.config';

@Injectable()
export class ArenaService {
  constructor(@InjectModel('Arena') private readonly TurnModel: Model<TurnConfig>) {}
}
