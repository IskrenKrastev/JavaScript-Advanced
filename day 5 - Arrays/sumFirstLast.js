function sumFirstLast(input) {
    let firstNum;
    let lastNum;
    let sum
    input = input.map(x => Number(x));
    if (input.length > 1) {
        firstNum = input.shift();
        lastNum = input.pop();
    } else {
        firstNum = input[0];
        lastNum = input[0]
    }
    sum = firstNum + lastNum;
    console.log(sum);

}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5'])