export interface PokemonConfig {
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
