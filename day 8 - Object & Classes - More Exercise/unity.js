class Rat {

    constructor(name) {
        this.name = name;
        this.rats = [];
    }
    unite(obj) {
        if (obj.constructor.name === 'Rat') {
            this.rats.push(obj)
        }
    }

    getRats() {
        return this.rats
    }

    toString() {
        let names = this.name;
        for (let rat of this.rats) {
            names += `\n##${rat.name}`;
        }
        return names
    }

}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex