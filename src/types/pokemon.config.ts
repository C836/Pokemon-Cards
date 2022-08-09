import { Document } from 'mongoose';

export interface PokemonConfig extends Document {
  id: number;
  name: string;
  type: string[];
  attributes: {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
}
