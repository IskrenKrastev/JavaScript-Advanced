class Stringer {
    constructor(string, length) {
        this.string = string;
        this.length = Number(length);
        this.innerString = this.string;
        this.innerLength = this.length
    }

    decrease(num) {

        if (this.innerLength - num < 0) {
            this.innerLength = 0
        } else {
            this.innerLength -= num;
        }
        this.innerString = this.innerString.split('')
        while (this.innerString.length !== this.innerLength) {
            this.innerString.pop();
        }
        this.innerString = this.innerString.join('');

        if (this.innerLength === this.length) {
            return (this.innerString);

        } else {
            this.innerString += '...'
            return this.innerString

        }
    }

    increase(num) {
        if (this.innerLength + num >= this.string.length) {
            this.innerLength += num
            this.innerString = this.string
            return this.innerString
        } else {
            this.innerLength += num
            this.innerString = this.string;


            this.innerString = this.innerString.split('');

            while (this.innerLength < this.string.length) {
                this.innerString.pop();

                this.innerLength += 1
            }

            this.innerString = this.innerString.join('');
            this.innerString += '...'
            return this.innerString
        }


    }

    toString() {
        return this.innerString.toString();
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(5);
console.log(test.toString()); // Test