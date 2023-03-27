import Energy from '../Energy';

export default interface Fighter {
  defense: number;
  energy?: Energy;
  lifePoints: number,
  strength: number,
  receiveDamage(attackPoints: number): number,
  attack(enemy: Fighter ): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
}