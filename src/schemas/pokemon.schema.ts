import * as moongose from 'mongoose'

export const PokemonSchema = new moongose.Schema({
  id: Number,
  name: String,
  type: [String],
  attributes: {
    hp: Number,
    attack: Number,
    defense: Number,
    spAttack: Number,
    spDefense: Number,
    speed: Number
  }
})