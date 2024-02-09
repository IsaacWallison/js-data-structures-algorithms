/*

  - stack data structure implementation
  ------ methods --------
    push(element(s))
    pop()
    peek()
    isEmpty()
    clear()
    size()  
*/

class Stack {
    #items = [];
    constructor() {
    }
    push(element) {
        return this.#items.push(element);
    }
    pop() {
        return this.#items.pop();
    }
    peek() {
        return this.#items[this.#items.length - 1];
    }
    isEmpty() {
        return this.#items.length === 0;
    }
    clear() {
        this.#items = [];
    }
    size() {
        return this.#items.length;
    }
    print() {
        return this.#items.join(", ")
    }
}

// ---- decimal number to binary -----
function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }
    console.log("----- stack -------")
    console.log(remStack.print());
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

console.log(decimalToBinary(233));
console.log(decimalToBinary(10));

function baseConverter(decNumber, base) {
    const remStack = new Stack();
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = decNumber;
    let rem;
    let baseString = "";
    if (!(base >= 2 && base <= 36)) {
        return "";
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}
console.log("-------------- baseConverter function --------------")
console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 35));