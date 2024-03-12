import { mul } from "./matek.js";
import cowsay from "cowsay";
// const [add, mul] = matekFuggvenyek;
// console.log(add(3, 4));
console.log(mul(3, 4));
console.log(
  cowsay.say({ text: mul(3, 4).toString(), e: "O O", T: "U", r: true })
);
