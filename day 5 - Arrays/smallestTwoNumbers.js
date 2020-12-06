function smallestTwoNumbers(input) {

    let sortedInput = input.sort((a, b) => {
        return a - b
    });
    let smallest = sortedInput.slice(0, 2);
    console.log(smallest.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);