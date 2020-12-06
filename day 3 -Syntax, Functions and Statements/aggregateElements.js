function aggregateElements(input) {

    let sumA = function () {
        let sum = 0;
        input.forEach(num => {
            sum += num;
        });
        return sum;
    }

    let sum1A = function () {
        let sum = 0;
        input.forEach(num => {
            sum += 1 / num;
        });
        return sum;
    }

    console.log(sumA(input));
    console.log(sum1A(input));
    console.log(input.join(''));
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);