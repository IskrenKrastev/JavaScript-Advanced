function largestNumber(firstNum, secondNum, thirdNum) {
    let maxNum = Number.MIN_SAFE_INTEGER;

    if (firstNum > maxNum) {
        maxNum = firstNum;
    }
    if (secondNum > maxNum) {
        maxNum = secondNum;
    }
    if (thirdNum > maxNum) {
        maxNum = thirdNum
    }
    console.log(`The largest number is ${maxNum}.`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);