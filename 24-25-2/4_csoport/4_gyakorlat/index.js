import { mul, alma, add } from "./math.js";
import cowsay from "cowsay";
console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "o O",
    T: "U ",
    r: true,
  })
);

console.log("Szeretem a cicákat!");
console.log(mul, alma, add(3, 4));
// const [osszeadas, szorzas] = barmi;
// console.log(osszeadas(3, 4));
// console.log(szorzas(3, 4));
