import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ArenaSchema } from '../schemas/arena.schema'
import { ArenaController } from './arena.controller';
import { ArenaService } from './arena.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Arena', schema: ArenaSchema}])],
  controllers: [ArenaController],
  providers: [ArenaService]
})
export class ArenaModule {}
