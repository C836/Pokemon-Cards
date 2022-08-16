export interface ComparisonSystemConfig extends Document {
  data: ComparisonConfig;
}

export interface ComparisonConfig {
  winner: number;
  loser: number;
  details: {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
}
