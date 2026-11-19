import Tree from "./bts.js";

function randomArray(size = 5) {
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

tree.insert(9);
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(8);

tree.prettyPrint();

// console.log(tree.includes(5));

// tree.deleteItem(1);
// tree.deleteItem(2);
// tree.deleteItem(3);
// // tree.deleteItem(4)
// // tree.deleteItem(5)
// // tree.deleteItem(6)
// // tree.deleteItem(7)
// tree.deleteItem(8);
// tree.deleteItem(9);

// tree.prettyPrint();
// tree.levelOrderForEach((node) => console.log(node));
// console.log("------------------");
// tree.preOrderForEach((node) => console.log(node));
// console.log("------------------");

// tree.inOrderForEach((node) => console.log(node));
// console.log("------------------");

// tree.postOrderForEach((node) => console.log(node));
// console.log("------------------");

// console.log(tree.getHeight(4));
// console.log("------------------");

// console.log(tree.getDepth(8));

console.log(tree.isBalanced());
