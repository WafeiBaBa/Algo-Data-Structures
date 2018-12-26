// const Stack = require('./data_structures/stack')
// const Queue = require('./data_structures/queue')
// const SinglyLinkedList = require('./data_structures/singly_linked_list')
// const DoubleyLinkedList = require('./data_structures/doubly_linked_list')
const BinarySearchTree = require('./data_structures/binary_search_tree')

// let myStack = new Stack(); //create item of type stack

// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack.push(1);

// console.log("Your stack is:");
// myStack.print();


// let myQueue = new Queue();

// myQueue.enqueue(1);
// myQueue.enqueue(1);
// myQueue.enqueue(1);
// myQueue.enqueue(1);
// myQueue.dequeue();

// console.log("Your Queue is:");
// myQueue.print();

// let list = new SinglyLinkedList();
// list.addNode(23);
// list.addNode(9);
// list.insertAfter(16, 23);
// console.log(list);

// let list = new DoubleyLinkedList();

let myBST = new BinarySearchTree();
myBST.add(10);
myBST.add(8);
myBST.add(12);
myBST.remove(10);
console.log(myBST.contains(12));
myBST.printByLevel();


