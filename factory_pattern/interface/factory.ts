import { Tuna, Bacon, Bread } from "../Ingredient";
export interface IFactory {
  createTuna(): Tuna;
  createBacon(): Bacon;
  createBread(): Bread;
}
