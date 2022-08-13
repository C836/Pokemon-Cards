import * as moongose from 'mongoose';

export const ArenaSchema = new moongose.Schema({
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
      type: moongose.Schema.Types.Mixed,
      required: true,
    },
  },
},
{ collection: 'arena', versionKey: false
});
