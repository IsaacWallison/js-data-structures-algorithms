const Node = require("./models/linkedList.models");
const defaultEquals = require("./utils/util");
/*
    - linkedList implementation
    @methods
        push(element)
        insert(element, position)
        getELementAt(index)
        remove(element)
        indexOf(element)
        removeAt(position)
        isEmpty()
        size()
        toString()
*/
class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            // remove first item
            if (index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);
                // element to be removed
                current = previous.next;
                // previous next now is the current next element
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                // undefined
                const current = this.head;
                // next will be undefined
                node.next = current;
                this.head = node;
            } else {
                // previous element of searched index
                const previous = this.getElementAt(index - 1);
                // index searched for insertion
                const current = previous.next;

                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.size() === 0;
    }
    getHead() {
        return this.head;
    }
    toString() {
        if (this.head == null) return "";
        const size = this.size();
        let string = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < size && current != null; i++) {
            string = `${string}, ${current.element}`;
            current = current.next;
        }
        return string;
    }
}

const linkedList = new LinkedList();
linkedList.push(11);
linkedList.push(10);
linkedList.push(12);
linkedList.insert(8, 2);
console.log(linkedList.toString());

module.exports = LinkedList;