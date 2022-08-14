import { Schema } from 'mongoose';
import { ArenaSystemConfig } from 'src/types/arena.config';

export const ArenaSchema = new Schema<ArenaSystemConfig>({
  data: {
    winner: {
      type: Number,
      required: true,
    },
    loser: {
      type: Number,
      required: true,
    },
    log: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
},
{ collection: 'arena', versionKey: false
});
