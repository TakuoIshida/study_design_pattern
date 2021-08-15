import { Player } from "./Player";
import { RandomHandStrategy } from "./strategy/RandomHandStrategy";
import { GuuHandStrategy } from "./strategy/GuuHandStrategy";
import { Hand } from "./Hand";

// playerA: randumにじゃんけんをだす
// playerB: グーだけをだす
// 各インスタンスを生成する
// 戦わせて結果を得る
// 判定結果を各インスタンスに実行させる
// 結果集計を表示する

class Main {
  // playerA: randumにじゃんけんをだす
  playerA = new Player("taro", new RandomHandStrategy());
  // playerB: グーだけをだす
  playerB = new Player("jiro", new GuuHandStrategy());
  janken() {
    for (let i = 0; i < 5; i++) {
      const nextHandA = this.playerA.setNextHand();
      const nextHandB = this.playerB.setNextHand();
      const result = new Hand(nextHandA, nextHandB).fight();
      this.setJankenResult(result);
    }
    this.showResults();
  }

  private setJankenResult(result: { playerA: number; playerB: number }): void {
    if (result.playerA === result.playerB) {
      this.playerA.even();
      this.playerB.even();
    } else if (result.playerA < result.playerB) {
      this.playerA.loose();
      this.playerB.win();
    } else {
      // result.playerA < result.playerB
      this.playerA.win();
      this.playerB.loose();
    }
  }

  private showResults() {
    this.playerA.showResult();
    this.playerB.showResult();
  }
}

new Main().janken();
