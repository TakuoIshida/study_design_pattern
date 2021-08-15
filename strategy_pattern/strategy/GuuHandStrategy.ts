import { HandType } from "../type/jankenType";
import { IHand } from "../interfaces/IHand";
import { HAND } from "../const/const";

export class GuuHandStrategy implements IHand {
  setNextHand(): HandType {
    console.log("Guu");
    console.log(HAND.GUU);
    return HAND.GUU;
  }
}
