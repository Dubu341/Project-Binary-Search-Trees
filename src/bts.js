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

  levelOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback must be a function");
    }
    if (this.root == null) return;

    let queue = [this.root];

    while (queue.length > 0) {
      let current = queue.shift();
      callback(current.data);

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
  }

  preOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback must be a function");
    }
    this.#preOrder(callback, this.root);
  }
  #preOrder(callback, root = this.root) {
    if (root === null) return;

    callback(root.data);
    this.#preOrder(callback, root.left);
    this.#preOrder(callback, root.right);
  }

  inOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback must be a function");
    }
    this.#inOrder(callback, this.root);
  }
  #inOrder(callback, root = this.root) {
    if (root === null) return;

    this.#inOrder(callback, root.left);
    callback(root.data);
    this.#inOrder(callback, root.right);
  }

  postOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback must be a function");
    }
    this.#postOrder(callback, this.root);
  }
  #postOrder(callback, root = this.root) {
    if (root === null) return;

    this.#postOrder(callback, root.left);
    this.#postOrder(callback, root.right);
    callback(root.data);
  }

  getHeight(value) {
    let current = this.root;
    while (current) {
      if (value === current.data) return this.#height(current);
      current = value < current.data ? current.left : current.right;
    }
    return;
  }
  #height(node) {
    if (node === null) return -1;
    const leftHeight = this.#height(node.left);
    const rightHeight = this.#height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  getDepth(value) {
    let current = this.root;
    let depth = 0;
    while (current) {
      if (value === current.data) return depth;
      depth++;
      current = value < current.data ? current.left : current.right;
    }
    return;
  }

  #isBalancedHelper(node) {
    if (node === null) return true;

    const left = this.#height(node.left);
    const right = this.#height(node.right);

    return (
      Math.abs(left - right) <= 1 &&
      this.#isBalancedHelper(node.left) &&
      this.#isBalancedHelper(node.right)
    );
  }

  isBalanced() {
    return this.#isBalancedHelper(this.root);
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
