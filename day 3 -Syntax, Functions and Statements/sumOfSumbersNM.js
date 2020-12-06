function sumOfNumbersNM(nNum, mNum) {
    let sum = 0;
    for (let i = Number(nNum); i <= Number(mNum); i++) {
        sum += i;
    }
    console.log(sum);
}
sumOfNumbersNM('1', '5');
sumOfNumbersNM('-8', '20');