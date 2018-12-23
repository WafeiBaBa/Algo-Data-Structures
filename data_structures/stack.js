class Stack {
	constructor() {
		this.stack = [];
	}

	push(data) {
    this.stack.push(data);
	}
	
	pop() { //pop takes no arguments and automatically removes the top elements
		return this.stack.pop();
	}

  print() {
    console.log(this.stack);
  }
}

module.exports = Stack;