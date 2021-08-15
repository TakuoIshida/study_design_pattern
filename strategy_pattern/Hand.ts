import { HAND, JUDGE } from "./const/const";
import { HandType } from "./type/jankenType";

export class Hand {
  playerA: HandType;
  playerB: HandType;

  constructor(playerA: HandType, playerB: HandType) {
    this.playerA = playerA;
    this.playerB = playerB;
  }

  public fight(): { playerA: number; playerB: number } {
    // あいこの場合
    if (this.playerB === this.playerA) {
      const result = {
        playerA: JUDGE.EVEN,
        playerB: JUDGE.EVEN,
      };
      return result;
    } else if (
      // Bが勝つ場合
      this.playerB > this.playerA ||
      (this.playerB === HAND.CHO && this.playerA === HAND.PAA)
    ) {
      const result = {
        playerA: JUDGE.LOOSE,
        playerB: JUDGE.WIN,
      };
      return result;
    } else {
      // Aが勝つ場合
      const result = {
        playerA: JUDGE.WIN,
        playerB: JUDGE.LOOSE,
      };
      return result;
    }
  }
}
