import { HAND } from "./const/const";
import { HandType } from "./type/jankenType";

export class GuuHand {
  hand: HandType;
  constructor() {
    this.hand = HAND.GUU;
  }
}
