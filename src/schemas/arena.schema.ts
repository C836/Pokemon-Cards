import * as moongose from 'mongoose';

export const ArenaSchema = new moongose.Schema({
  log: moongose.Schema.Types.Mixed,
  win: Boolean,
}, { collection: 'arena' });
