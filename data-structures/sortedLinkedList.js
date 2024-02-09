const LinkedList = require("./linkedList");
const { defaultEquals, defaultCompare, Compare } = require("./utils/util");

class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }
    push(element) {
        if (this.isEmpty()) {
            super.push(element);
        } else {
            const index = this.getIndexNextSortedElement(element);
            // call linked list insert implementation
            super.insert(element, index);
        }
    }
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, index === 0 ? index : 0);
        }
        // get index from next element sorted order
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }
    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            // compare to sort elements
            const comp = this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }
}