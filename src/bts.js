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

  getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) curr = curr.left;
    return curr;
  }
  deleteItem(value) {
    this.root = this.#deleteNode(value, this.root);
  }
  #deleteNode(value, root) {
    if (root === null) return null;

    if (value < root.data) {
      root.left = this.#deleteNode(value, root.left);
    } else if (value > root.data) {
      root.right = this.#deleteNode(value, root.right);
    } else {
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      const successor = this.getSuccessor(root);
      root.data = successor.data;
      root.right = this.#deleteNode(successor.data, root.right);
    }
    return root;
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
