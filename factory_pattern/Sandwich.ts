import { Bread, Tuna, Bacon } from "./Ingredient";
import { IFactory } from "./interface/factory";

export abstract class Sandwitch {
  public abstract cost(): number;
}

export class TunaSand extends Sandwitch {
  public bread: Bread;
  public tuna: Tuna;
  constructor(factory: IFactory) {
    super();
    this.bread = factory.createBread();
    this.tuna = factory.createTuna();
  }
  cost(): number {
    const cost = this.bread.cost + this.tuna.cost;
    return cost;
  }
}

export class BLTSand extends Sandwitch {
  public bread: Bread;
  public bacon: Bacon;
  constructor(factory: IFactory) {
    super();
    this.bread = factory.createBread();
    this.bacon = factory.createBacon();
  }
  cost(): number {
    const cost = this.bread.cost + this.bacon.cost;
    return cost;
  }
}
