class Node {
    constructor(element) {
        this.element = element;
        this.nextElement = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
        this.counter = 0;
    }
    push(element) {
        const node = new Node(element);
        let currentNode = this.root;
        if (!currentNode) {
            this.root = node;
        } else {
            while (currentNode != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.counter++;
    }
    insert() { }

    getElement(position) {
        if (position >= 0 && position <= this.counter) {
            let currentNode = this.root;
            for (let i = 0; i <= this.counter && currentNode != null; i++) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
        return undefined;
    }
}