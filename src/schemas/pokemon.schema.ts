import { Schema } from 'mongoose';

import { PokemonConfig } from 'src/types/pokemon.config';

export const PokemonSchema = new Schema<PokemonConfig>({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: [String],
    required: true,
  },
  attributes: {
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
{ collection: 'pokemon', versionKey: false
});
