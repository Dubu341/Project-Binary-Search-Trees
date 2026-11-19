import Tree from "./bst.js";

function randomNumbers(size = 10) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

const random = randomNumbers();
console.log("hello");

console.log("Random array:", random);

const tree = new Tree(random);

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

console.log("Is balanced: " + tree.isBalanced());
tree.prettyPrint();

console.log("---------level---------");
tree.levelOrderForEach((value) => console.log(value));

console.log("---------pre---------");
tree.preOrderForEach((value) => console.log(value));

console.log("---------post---------");
tree.postOrderForEach((value) => console.log(value));

console.log("---------order---------");
tree.inOrderForEach((value) => console.log(value));
console.log("------------------");

tree.insert(101);
tree.insert(102);
tree.insert(111);
tree.insert(1701);
console.log("is balanced: " + tree.isBalanced());
tree.prettyPrint();
console.log("------------------");

tree.rebalance();
console.log("is balanced: " + tree.isBalanced());
tree.prettyPrint();
console.log("---------level---------");
tree.levelOrderForEach((value) => console.log(value));

console.log("---------pre---------");
tree.preOrderForEach((value) => console.log(value));

console.log("---------post---------");
tree.postOrderForEach((value) => console.log(value));

console.log("---------order---------");
tree.inOrderForEach((value) => console.log(value));
console.log("------------------");
