const ValuePair = require("./models/valuePair");
const { defaultToString } = require("./utils/util");
/*
    - dictionary data structure implementation
    @methods
        set(key, value)
        remove(key)
        hasKey(key)
        get(key)
        clear()
        size()
        isEmpty()
        keys()
        values()
        keyValues()
        forEach(callBackFn)
*/
class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    clear() {
        this.table = {};
    }
    size() {
        return Object.keys(this.table).length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }
    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }
    keyValues() {
        const valuePairs = [];
        for (const k in this.table) {
            if (this.hasKey(k)) {
                valuePairs.push(this.table[k]);
            }
        }
        return valuePairs;
    }
    forEach(callBackFn) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callBackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) break;
        }
    }
    toString() {
        if (this.isEmpty()) return "";
        const valuePairs = this.keyValues();
        let string = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            string = `${string}, ${valuePairs[i].toString()}`;
        }
        return string;
    }
}

const dictionary = new Dictionary();
dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("Harry", "harry@email.com");
console.log(dictionary.hasKey("Harry"));
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get("Harry"));
dictionary.forEach((k, v) => {
    console.log(`forEach: key: ${k}, value: ${v}`);
})