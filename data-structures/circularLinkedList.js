const LinkedList = require("./linkedList");
const { defaultEquals } = require("./utils/util");

class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            // last element
            current = this.getElementAt(this.size() - 1);
            // point to the new node
            current.next = node;
        }
        // set node to point to first element to have circular list behaviour
        node.next = this.head;
        this.count++;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {

            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    // set node to point to current first element
                    node.next = current;
                    // find the last element
                    current = this.getElementAt(this.size());
                    // updates the last element
                    this.head = node;
                    // set the last element next property to first element
                    current.next = this.head;
                }
            } else {
                // index is different from zero get previous element
                const previous = this.getElementAt(index - 1);
                // node next is pointing now to older element from previous next
                node.next = previous.next;
                // now set the next property from previous to point to node
                previous.next = node;
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
                if (this.size() === 1) {
                    this.head = undefined;
                } else {
                    const removed = this.head;
                    // last element
                    current = this.getElementAt(this.size());
                    // set to the next element
                    this.head = this.head.next;
                    // point to the new first element
                    current.next = this.head;
                    // to return the element removed
                    current = removed;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                // element to be removed
                current = previous.next;
                // point to the next element after the current
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}