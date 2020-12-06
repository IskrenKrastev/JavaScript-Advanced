function negativePositiveNumbers(input) {

    let changedNumbers = [];
    input.forEach(x => {
        if (x < 0) {
            changedNumbers.unshift(x);
        } else {
            changedNumbers.push(x);
        }
    });
    console.log(changedNumbers.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);