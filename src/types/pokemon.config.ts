import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum PokemonTypes {
  bug = 'bug',
  dark = 'dark',
  dragon = 'dragon',
  electric = 'electric',
  fairy = 'fairy',
  fighting = 'fighting',
  fire = 'fire',
  flying = 'flying',
  ghost = 'ghost',
  grass = 'grass',
  ground = 'ground',
  ice = 'ice',
  normal = 'normal',
  poison = 'poison',
  psychic = 'psychic',
  rock = 'rock',
  steel = 'steel',
  water = 'water',
}

export class PokemonConfig extends Document {
  @ApiProperty({
    type: Number,
    description: 'Id único do pokémon (de acordo com a pokédex oficial)',
    example: '130',
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Nome do pokémon',
    example: 'Gyarados',
  })
  name: string;

  @ApiProperty({
    type: [String],
    description: 'Tipo do pokémon (em inglês)',
    example: '["water", "flying"]',
  })
  type: string[];

  @ApiProperty({
    type: 'object',
    properties: {
      hp: {
        type: 'number',
        description: 'Pontos de vida',
      },
      attack: {
        type: 'number',
        description: 'Valor de ataque para habilidades físicas',
      },
      defense: {
        type: 'number',
        description: 'Resistência a ataques físicos',
      },
      spAttack: {
        type: 'number',
        description: 'Valor de ataque para habilidades especiais',
      },
      spDefense: {
        type: 'number',
        description: 'Resistência a habilidades especiais',
      },
      speed: {
        type: 'number',
        description: 'Valor para determinar quem irá agir primeiro na batalha',
      },
    },
    example: {
      hp: 95,
      attack: 125,
      defense: 79,
      spAttack: 60,
      spDefense: 100,
      speed: 81,
    },
  })
  attributes: {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
}
