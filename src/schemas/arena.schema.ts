import * as moongose from 'mongoose';

export const ArenaSchema = new moongose.Schema({
    data: {
      pokemon: Number,
      opponent: Number,
      log: moongose.Schema.Types.Mixed,
      win: Boolean,
    }},
  { collection: 'arena' },
);
