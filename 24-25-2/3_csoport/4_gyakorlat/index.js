import math from "./math.js";
import cowsay from "cowsay";
console.log("a szám:");

const { addnmul, add } = math;

console.log(math.addnmul);

console.log(
  cowsay.say({
    text: "index.js",
    e: "o O",
    T: "$",
    r: true,
  })
);
