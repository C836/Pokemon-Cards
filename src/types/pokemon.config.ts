import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class PokemonConfig extends Document {
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
    example: '["fire", "flying"]',
  })
  type: string[];

  @ApiProperty({
    type: 'object',
    description: 'Atributos de batalha do pokémon',
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
