import { AmericanStore, JapaneseStore } from "./Store";
import { Menu } from "./const/const";

const japaneseStore = new JapaneseStore();
const jpCost = japaneseStore.order(Menu.BLT);
const jpCost2 = japaneseStore.order(Menu.Tuna);
console.log("jpCost");
console.log(jpCost);
console.log("jpCost2");
console.log(jpCost2);

const americanStore = new AmericanStore();
const usCost = americanStore.order(Menu.Tuna);
console.log("usCost");
console.log(usCost);
