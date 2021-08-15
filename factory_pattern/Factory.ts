import {
  AmericanBacon,
  AmericanBread,
  AmericanTuna,
  Bacon,
  Bread,
  JapaneseBacon,
  JapaneseBread,
  JapaneseTuna,
  Tuna,
} from "./Ingredient";
import { IFactory } from "./interface/factory";

export class JapaneseFactory implements IFactory {
  createBacon(): Bacon {
    return new JapaneseBacon();
  }
  createBread(): Bread {
    return new JapaneseBread();
  }
  createTuna(): Tuna {
    return new JapaneseTuna();
  }
}

export class AmericanFactory implements IFactory {
  createBacon(): Bacon {
    return new AmericanBacon();
  }
  createBread(): Bread {
    return new AmericanBread();
  }
  createTuna(): Tuna {
    return new AmericanTuna();
  }
}
