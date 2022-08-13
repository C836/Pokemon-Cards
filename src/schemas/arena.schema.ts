import * as moongose from 'mongoose';

export const ArenaSchema = new moongose.Schema({
    data: {
      pokemon: { type: Number, required: true },
      opponent: { type: Number, required: true },
      log: { type: moongose.Schema.Types.Mixed, required: true},
      win: { type: Boolean, required: true },
    }},
  { collection: 'arena' },
);
