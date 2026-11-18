import Node from "./node.js";

class Tree {
  constructor(array) {
    const sorted = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.#buildTree(sorted, 0, sorted.length - 1);
  }

  #buildTree(array, start, end) {
    if (start > end) return null;

    const mid = Math.floor(start + (end - start) / 2);
    const root = new Node(array[mid]);

    root.left = this.#buildTree(array, start, mid - 1);
    root.right = this.#buildTree(array, mid + 1, end);
    return root;
  }

  includes(value) {
    let current = this.root;
    while (current) {
      if (value === current.data) return true;
      current = value < current.data ? current.left : current.right;
    }
    return false;
  }

  insert(value) {
    if (!this.root) return this.root;

    const newNode = new Node(value);

    let current = this.root;

    while (current) {
      if (current.data === value) {
        return this.root;
      } else if (current.data > value && current.left !== null) {
        current = current.left;
      } else if (current.data < value && current.right !== null) {
        current = current.right;
      } else {
        break;
      }
    }

    if (current.data > value) {
      current.left = newNode;
    } else {
      current.right = newNode;
    }
    return this.root;
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null || node === undefined) {
      return;
    }

    this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

export default Tree;
