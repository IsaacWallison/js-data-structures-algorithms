const LinkedList = require("./linkedList");
const DoublyNode = require("./models/doubleLinkedList.models");
const { defaultEquals } = require("./utils/util");

/*
    - doubly linked list implementation
    @methods
        push(element)
        insert(element, index)
        removeAt(index)
        indexOf(element)
        getHead()
        getTail()
        clear()
        toString()
        inverseToString()
*/

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }
    push(element) {
        const node = new DoublyNode(element);
        if (this.head == null) {
            // assign both to node
            this.head = node;
            this.tail = node;
        } else {
            // the current last element next property point to node
            this.tail.next = node;
            // and the node prev point to tail
            node.prev = this.tail;
            // and the last element now is node
            this.tail = node;
        }
        this.count++;
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    // this move the first element to second position
                    node.next = this.head;
                    // first element now in second position point to node
                    current.prev = node;
                    // now set the first element to node
                    this.head = node;
                }
            } else if (index === this.count) {
                // now current is the last element
                current = this.tail;
                // point to the node
                current.next = node;
                // node prev point to the current
                node.prev = current;
                // now the last element will be the node
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                // reference to the next element
                current = previous.next;
                // node next property reference to current
                node.next = current;
                // previous next property reference to node
                previous.next = node;
                // current prev property reference to node
                current.prev = node;
                // node prev property reference to previous
                node.prev = previous;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                // now is pointing to the next element
                this.head = current.next;
                if (this.count === 1) {
                    // if has one element
                    this.tail = undefined;
                } else {
                    // prev must to be updated to undefined
                    this.head.prev = undefined;
                }
            } else if (index === this.count - 1) {
                // access the last element
                current = this.tail;
                // point to the previous element
                this.tail = current.prev;
                // and updates the next to undefined to remove
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                // access previous from current element
                const previous = current.prev;
                // access previous next to set to current next
                previous.next = current.next;
                // from current next element previous property point to previous
                current.next.prev = previous;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    indexOf(element) {
        let current = this.head;
        let index = 0;
        // loop to check element passed with current element
        while (current != null) {
            if (this.equalsFn(element, current.element)) {
                return index;
            }
            index++;
            current = current.next;
        }
        // returns -1 just if element not found
        return -1;
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    clear() {
        super.clear();
        this.tail = undefined;
    }
    toString() {
        if (this.head == null) return "";
        let string = `${this.head.element}`;
        let current = this.head.next;
        while (current != null) {
            string = `${string}, ${current.element}`;
            current = current.next;
        }
        return string;
    }
    inverseToString() {
        if (this.tail == null) return "";
        let string = `${this.tail.element}`;
        let previous = this.tail.prev;
        while (previous != null) {
            string = `${string}, ${previous.element}`;
            previous = previous.prev;
        }
        return string;
    }
}

module.exports = DoublyLinkedList;