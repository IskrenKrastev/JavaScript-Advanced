function biggestElement(input) {
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {

        input[i].forEach(x => {
            if (x > maxNum) {
                maxNum = x
            }
        });
    }
    console.log(maxNum);
}
biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);
biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);