import Tree from "./bts.js";

function arrayPrime() {
  let arr = [];
  let length = Math.floor(Math.random() * 20) + 1;
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

let randomArray = arrayPrime();

console.log("Random array:", randomArray);

const tree = new Tree(randomArray);

console.log(tree.prettyPrint());
