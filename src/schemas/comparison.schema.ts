import * as moongose from 'mongoose';

export const ComparisonSchema = new moongose.Schema(
  {
    data: {
      winner: Number,
      loser: Number,
      details: {
        hp: Number,
        attack: Number,
        defense: Number,
        spAttack: Number,
        spDefense: Number,
        speed: Number,
      },
    },
  },
  { collection: 'comparison' },
);
