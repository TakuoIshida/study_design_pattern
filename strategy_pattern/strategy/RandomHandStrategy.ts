import { HandType } from "../type/jankenType";
import { IHand } from "../interfaces/IHand";

export class RandomHandStrategy implements IHand {
  setNextHand(): HandType {
    console.log("random");
    console.log(Math.floor(Math.random() * 2));

    return Math.floor(Math.random() * 2) as HandType;
  }
}
