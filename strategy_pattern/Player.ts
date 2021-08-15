import { IHand } from "./interfaces/IHand";

export class Player {
  private name: string;
  private winCount = 0;
  private looseCount = 0;
  private evenCount = 0;
  private gameCount = 0;
  private strategy: IHand;
  constructor(name: string, strategy: IHand) {
    this.name = name;
    this.strategy = strategy;
  }

  setNextHand() {
    return this.strategy.setNextHand();
  }

  win(): void {
    this.winCount++;
    this.gameCount++;
  }

  loose(): void {
    this.looseCount++;
    this.gameCount++;
  }

  even(): void {
    this.evenCount++;
    this.gameCount++;
  }
  showResult(): void {
    console.log("***結果表示***");
    console.log(
      "[" +
        this.name +
        "]" +
        "times:" +
        this.gameCount +
        ", win:" +
        this.winCount +
        ", loose:" +
        this.looseCount +
        ", even:" +
        this.evenCount
    );
  }
}
