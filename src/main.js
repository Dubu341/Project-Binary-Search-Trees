import Tree from "./bts.js";

function randomArray(size = 20) {
  const arr = Array.from({ length: size }, (_, i) => i + 1);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const random = randomArray();

console.log("Random array:", random);

const tree = new Tree(random);

tree.prettyPrint();

console.log(tree.includes(20));
