// // const searchBtn = document.getElementById('search');
// // const insertBtn = document.getElementById('insert');
// // const deleteBtn = document.getElementById('delete');
// // const inorderBtn = document.getElementById('inorder');
// // const postorderBtn = document.getElementById('postorder');
// // const preorderBtn = document.getElementById('preorder');
// // const outputEl = document.getElementById('output');
// // const valueInput = document.getElementById('value');

// // let bst = null; // Initialize the BST

// // // Node class for the binary search tree
// // class Node {
// //   constructor(data) {
// //     this.data = data;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }

// // // BinarySearchTree class
// // class BinarySearchTree {
// //   constructor() {
// //     this.root = null;
// //   }

// //   // Search for a value in the BST
// //   search(value) {
// //     let current = this.root;
// //     while (current) {
// //       if (value === current.data) {
// //         return true;
// //       } else if (value < current.data) {
// //         current = current.left;
// //       } else {
// //         current = current.right;
// //       }
// //     }
// //     return false;
// //   }

// //   // Insert a value into the BST
// //   insert(value) {
// //     const newNode = new Node(value);
// //     if (!this.root) {
// //       this.root = newNode;
// //       return;
// //     }

// //     let current = this.root;
// //     let parent = null;
// //     while (current) {
// //       parent = current;
// //       if (value < current.data) {
// //         current = current.left;
// //       } else {
// //         current = current.right;
// //       }
// //     }

// //     if (value < parent.data) {
// //       parent.left = newNode;
// //     } else {
// //       parent.right = newNode;
// //     }
// //   }

// //   // Delete a value from the BST (basic implementation)
// //   delete(value) {
// //     let current = this.root;
// //     let parent = null;

// //     // Find the node to delete and its parent
// //     while (current && current.data !== value) {
// //       parent = current;
// //       if (value < current.data) {
// //         current = current.left;
// //       } else {
// //         current = current.right;
// //       }
// //     }

// //     if (!current) {
// //       outputEl.textContent = 'Value not found.';
// //       return;
// //     }

// //     // Handle cases for node with zero, one, or two children
// //     if (!current.left && !current.right) {
// //       if (!parent) {
// //         this.root = null;
// //       } else if (parent.left === current) {
// //         parent.left = null;
// //       } else {
// //         parent.right = null;
// //       }
// //     } else if (!current.left) {
// //       if (!parent) {
// //         this.root = current.right;
// //       } else if (parent.left === current) {
// //         parent.left = current.right;
// //       } else {
// //         parent.right = current.right;
// //       }
// //     } else if (!current.right) {
// //       if (!parent) {
// //         this.root = current.left;
      

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     search(value) {
//         return this.searchRecursive(this.root, value);
//     }

//     searchRecursive(root, value) {
//         if (root === null) {
//             return false;
//         }
//         if (root.data === value) {
//             return true;
//         } else if (value < root.data) {
//             return this.searchRecursive(root.left, value);
//         } else {
//             return this.searchRecursive(root.right, value);
//         }
//     }

//     insert(value) {
//         this.root = this.insertRecursive(this.root, value);
//     }

//     insertRecursive(root, value) {
//         if (root === null) {
//             return new Node(value);
//         }
//         if (value < root.data) {
//             root.left = this.insertRecursive(root.left, value);
//         } else if (value > root.data) {
//             root.right = this.insertRecursive(root.right, value);
//         }
//         return root;
//     }

//     deleteNode(value) {
//         this.root = this.deleteRecursive(this.root, value);
//     }

//     deleteRecursive(root, value) {
//         if (root === null) {
//             return root;
//         }
//         if (value < root.data) {
//             root.left = this.deleteRecursive(root.left, value);
//         } else if (value > root.data) {
//             root.right = this.deleteRecursive(root.right, value);
//         } else {
//             if (root.left === null) {
//                 return root.right;
//             } else if (root.right === null) {
//                 return root.left;
//             }
//             root.data = this.minValue(root.right);
//             root.right = this.deleteRecursive(root.right, root.data);
//         }
//         return root;
//     }

//     minValue(node) {
//         let minv = node.data;
//         while (node.left !== null) {
//             minv = node.left.data;
//             node = node.left;
//         }
//         return minv;
//     }

//     inorder() {
//         const result = [];
//         this.inorderRecursive(this.root, result);
//         return result;
//     }

//     inorderRecursive(root, result) {
//         if (root !== null) {
//             this.inorderRecursive(root.left, result);
//             result.push(root.data);
//             this.inorderRecursive(root.right, result);
//         }
//     }

//     preorder() {
//         const result = [];
//         this.preorderRecursive(this.root, result);
//         return result;
//     }

//     preorderRecursive(root, result) {
//         if (root !== null) {
//             result.push(root.data);
//             this.preorderRecursive(root.left, result);
//             this.preorderRecursive(root.right, result);
//         }
//     }

//     postorder() {
//         const result = [];
//         this.postorderRecursive(this.root, result);
//         return result;
//     }

//     postorderRecursive(root, result) {
//         if (root !== null) {
//             this.postorderRecursive(root.left, result);
//             this.postorderRecursive(root.right, result);
//             result.push(root.data);
//         }
//     }
// }

// const bst = new BinarySearchTree();

// function insertValue() {
//     const value = parseInt(document.getElementById('value').value);
//     bst.insert(value);
//     displayMessage(`Inserted ${value}`);
// }

// function searchValue() {
//     const value = parseInt(document.getElementById('value').value);
//     const found = bst.search(value);
//     displayMessage(found ? `Value ${value} found` : `Value ${value} not found`);
// }

// function deleteValue() {
//     const value = parseInt(document.getElementById('value').value);
//     bst.deleteNode(value);
//     displayMessage(`Deleted ${value}`);
// }

// function inorderTraversal() {
//     const result = bst.inorder();
//     displayMessage(`Inorder: ${result.join(', ')}`);
// }

// function preorderTraversal() {
//     const result = bst.preorder();
//     displayMessage(`Preorder: ${result.join(', ')}`);
// }

// function postorderTraversal() {
//     const result = bst.postorder();
//     displayMessage(`Postorder: ${result.join(', ')}`);
// }

// function displayMessage(message) {
//     const output = document.getElementById('output');
//     const p = document.createElement('p');
//     p.textContent = message;
//     output.appendChild(p);
// }


//////////////////////////////////////////////////////////////////////////////////
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    search(value) {
        return this.searchRecursive(this.root, value);
    }

    searchRecursive(root, value) {
        if (root === null) {
            return false;
        }
        if (root.data === value) {
            return true;
        } else if (value < root.data) {
            return this.searchRecursive(root.left, value);
        } else {
            return this.searchRecursive(root.right, value);
        }
    }

    insert(value) {
        this.root = this.insertRecursive(this.root, value);
        this.render();
    }

    insertRecursive(root, value) {
        if (root === null) {
            return new Node(value);
        }
        if (value < root.data) {
            root.left = this.insertRecursive(root.left, value);
        } else if (value > root.data) {
            root.right = this.insertRecursive(root.right, value);
        }
        return root;
    }

    deleteNode(value) {
        this.root = this.deleteRecursive(this.root, value);
        this.render();
    }

    deleteRecursive(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.data) {
            root.left = this.deleteRecursive(root.left, value);
        } else if (value > root.data) {
            root.right = this.deleteRecursive(root.right, value);
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }
            root.data = this.minValue(root.right);
            root.right = this.deleteRecursive(root.right, root.data);
        }
        return root;
    }

    minValue(node) {
        let minv = node.data;
        while (node.left !== null) {
            minv = node.left.data;
            node = node.left;
        }
        return minv;
    }

    inorder() {
        const result = [];
        this.inorderRecursive(this.root, result);
        return result;
    }

    inorderRecursive(root, result) {
        if (root !== null) {
            this.inorderRecursive(root.left, result);
            result.push(root.data);
            this.inorderRecursive(root.right, result);
        }
    }

    preorder() {
        const result = [];
        this.preorderRecursive(this.root, result);
        return result;
    }

    preorderRecursive(root, result) {
        if (root !== null) {
            result.push(root.data);
            this.preorderRecursive(root.left, result);
            this.preorderRecursive(root.right, result);
        }
    }

    postorder() {
        const result = [];
        this.postorderRecursive(this.root, result);
        return result;
    }

    postorderRecursive(root, result) {
        if (root !== null) {
            this.postorderRecursive(root.left, result);
            this.postorderRecursive(root.right, result);
            result.push(root.data);
        }
    }

    // Function to render the BST using D3.js
    render() {
        const svg = d3.select("#tree-container")
                      .html("")
                      .append("svg")
                      .attr("width", 600)
                      .attr("height", 400)
                      .append("g")
                      .attr("transform", "translate(50,50)");

        const tree = d3.tree().size([400, 300]);
        const root = d3.hierarchy(this.root);

        tree(root);

        const links = svg.selectAll(".link")
                         .data(root.descendants().slice(1))
                         .enter().append("path")
                         .attr("class", "link")
                         .attr("d", d => {
                             return "M" + d.y + "," + d.x
                                  + "C" + (d.y + d.parent.y) / 2 + "," + d.x
                                  + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
                                  + " " + d.parent.y + "," + d.parent.x;
                         });

        const nodes = svg.selectAll(".node")
                         .data(root.descendants())
                         .enter().append("g")
                         .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
                         .attr("transform", d => "translate(" + d.y + "," + d.x + ")");

        nodes.append("circle")
             .attr("r", 10);

        nodes.append("text")
             .attr("dy", 3)
             .attr("x", d => d.children ? -12 : 12)
             .style("text-anchor", d => d.children ? "end" : "start")
             .text(d => d.data.data);
    }
}

const bst = new BinarySearchTree();

function insertValue() {
    const value = parseInt(document.getElementById('value').value);
    bst.insert(value);
    displayMessage(`Inserted ${value}`);
}

function searchValue() {
    const value = parseInt(document.getElementById('value').value);
    const found = bst.search(value);
    displayMessage(found ? `Value ${value} found` : `Value ${value} not found`);
}

function deleteValue() {
    const value = parseInt(document.getElementById('value').value);
    bst.deleteNode(value);
    displayMessage(`Deleted ${value}`);
}

function inorderTraversal() {
    const result = bst.inorder();
    displayMessage(`Inorder: ${result.join(', ')}`);
}

function preorderTraversal() {
    const result = bst.preorder();
    displayMessage(`Preorder: ${result.join(', ')}`);
}

function postorderTraversal() {
    const result = bst.postorder();
    displayMessage(`Postorder: ${result.join(', ')}`);
}

function displayMessage(message) {
    const output = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = message;
    output.appendChild(p);
}

