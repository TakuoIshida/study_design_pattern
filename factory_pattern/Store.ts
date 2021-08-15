import { Menu, PricePerCost } from "./const/const";
import { AmericanFactory, JapaneseFactory } from "./Factory";
import { IFactory } from "./interface/factory";
import { BLTSand, Sandwitch, TunaSand } from "./Sandwich";

// abstract は is aの関係： 「AmericanStoreはStoreです。」といえる
// interface は can doの関係： 「BackupController は、backup できます。」といえる
// 何を抽象化し、どんな関係の機能を継承させたいのか？多様性を持たせたいのか？で 使い分ける

export abstract class Store {
  public abstract pricePerCost: number;
  public order(item: string): number | undefined {
    let cost: number | undefined;
    let sand = this.create(item);
    cost = sand?.cost();
    let price: number | undefined;
    if (cost) {
      price = cost + this.pricePerCost;
    }
    return price;
  }

  public abstract create(item: string): Sandwitch | undefined;
}

export class AmericanStore extends Store {
  public pricePerCost: number = PricePerCost.America;
  public factory: IFactory = new AmericanFactory();
  public create(item: string): Sandwitch | undefined {
    let sand: Sandwitch | undefined;
    switch (item) {
      case Menu.BLT:
        sand = new BLTSand(this.factory);
        return sand;
      case Menu.Tuna:
        sand = new TunaSand(this.factory);
        return sand;
    }
  }
}

export class JapaneseStore extends Store {
  pricePerCost: number = PricePerCost.Japan;
  public factory: IFactory = new JapaneseFactory();
  public create(item: string): Sandwitch | undefined {
    let sand: Sandwitch | undefined;
    switch (item) {
      case Menu.BLT:
        sand = new BLTSand(this.factory);
        return sand;
      case Menu.Tuna:
        sand = new TunaSand(this.factory);
        return sand;
    }
  }
}
