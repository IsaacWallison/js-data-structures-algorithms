const Node = require("./linkedList.models");

class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}

module.exports = DoublyNode;