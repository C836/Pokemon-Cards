import * as moongose from 'mongoose';

export const ComparisonSchema = new moongose.Schema({
  data: {
    winner: {
      type: Number,
      required: true,
    },
    loser: {
      type: Number,
      required: true,
    },
    details: {
      hp: {
        type: Number,
        required: true,
      },
      attack: {
        type: Number,
        required: true,
      },
      defense: {
        type: Number,
        required: true,
      },
      spAttack: {
        type: Number,
        required: true,
      },
      spDefense: {
        type: Number,
        required: true,
      },
      speed: {
        type: Number,
        required: true,
      },
    },
  },
},
{ collection: 'comparison', versionKey: false
});
