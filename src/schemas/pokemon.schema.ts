import * as moongose from 'mongoose';

export const PokemonSchema = new moongose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: [String], required: true },
  attributes: {
    hp: { type: Number, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    spAttack: { type: Number, required: true },
    spDefense: { type: Number, required: true },
    speed: { type: Number, required: true },
  },
});
