import Tree from "./bts.js";

function randomArray(size = 13) {
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

tree.insert(90);
tree.insert(64);
tree.insert(58);
tree.insert(77);
tree.insert(18);

// console.log(tree.includes(5));

// tree.deleteItem(1);
// tree.deleteItem(2);
// tree.deleteItem(3);
//  tree.deleteItem(4)
//  tree.deleteItem(5)
//  tree.deleteItem(6)
//  tree.deleteItem(7)
// tree.deleteItem(8);
// tree.deleteItem(9);

// tree.prettyPrint();
// tree.levelOrderForEach((value) => console.log(value));
// console.log("------------------");
// tree.preOrderForEach((value) => console.log(value));
// console.log("------------------");

// tree.inOrderForEach((value) => console.log(value));
// console.log("------------------");

// tree.postOrderForEach((value) => console.log(value));
// console.log("------------------");

// console.log(tree.getHeight(4));
// console.log("------------------");

// console.log(tree.getDepth(8));

console.log("is balanced");
console.log(tree.isBalanced());
tree.prettyPrint();

tree.rebalance();
console.log("------------------");

console.log("is balanced");
console.log(tree.isBalanced());
tree.prettyPrint();
