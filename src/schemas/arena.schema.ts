import * as moongose from 'mongoose';

export const ArenaSchema = new moongose.Schema({
  log: moongose.Schema.Types.Mixed,
  winner: Number,
  loser: Number,
}, { collection: 'arena' });
