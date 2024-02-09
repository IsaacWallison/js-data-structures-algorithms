/*
  - deque data structure implementation
  @methods
    isEmpty
    clear
    toString
    size
    addFront
    addBack
    removeFront
    removeBack
    PeekFront
    peekBack
*/
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }

    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }


    removeFront() {
        if (this.isEmpty()) return undefined;
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        return result;
    }

    removeBack() {
        if (this.isEmpty()) return undefined;
        const result = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.lowestCount++;
        return result;
    }

    peekFront() {
        if (this.isEmpty) return undefined;
        return this.items[this.lowestCount];
    }
    peekBack() {
        if (this.isEmpty()) return undefined;
        return this.items[this.count];
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    size() {
        return this.count - this.lowestCount;
    }
    toString() {
        if (this.isEmpty()) return "";
        let string = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            string = `${string}, ${this.items[i]}`;
        }
        return string;
    }
}

function palindromeChecker(string) {
    if (string === undefined || string === null ||
        (string !== null && string.length === 0)) {
        return false;
    }
    const deque = new Deque();
    const lowerString = string.toLocaleLowerCase().split(" ").join("");
    let isEqual = true;
    let firstChar, lastChar;
    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if (firstChar !== lastChar)
            isEqual = false;
    }
    return isEqual;
}

const result = palindromeChecker("level");
console.log(result);