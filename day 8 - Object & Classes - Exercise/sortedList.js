class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.size += 1;
        this.list.sort((a, b) => a - b);
        return;
    }

    remove(index) {
        if (this.list.length > index && index >= 0) {
            this.list.splice(index, 1)
            this.size--
        } else {
            throw new Error
        }
        this.list.sort((a, b) => a - b);
        return;
    }
    get(index) {
        if (this.list.length > index && index >= 0) {
            return this.list[index]
        } else {
            throw new Error
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));