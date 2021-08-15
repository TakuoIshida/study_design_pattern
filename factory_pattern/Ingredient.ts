export abstract class Bread {
  public abstract cost: number;
}

export abstract class Tuna {
  public abstract cost: number;
}

export abstract class Bacon {
  public abstract cost: number;
}

export class JapaneseBread extends Bread {
  cost = 60;
}

export class AmericanBread extends Bread {
  cost = 50;
}

export class JapaneseTuna extends Tuna {
  cost = 70;
}

export class AmericanTuna extends Tuna {
  cost = 140;
}

export class JapaneseBacon extends Bacon {
  cost = 200;
}

export class AmericanBacon extends Bacon {
  cost = 100;
}
