const numbers = [8, 0, 1, 2, 4];
Array.prototype.insertFirstPosition = function (value) {
    for (let i = this.length; i <= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
}
// remove from the first position
// re index
Array.prototype.reIndex = function (array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== undefined) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

Array.prototype.removeFirstPosition = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
}
numbers.insertFirstPosition(1);
console.log(numbers);

// fibonacci
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);