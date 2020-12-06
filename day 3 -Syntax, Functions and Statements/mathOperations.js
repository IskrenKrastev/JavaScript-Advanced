function mathOperations(firstNum, secondNum, operator) {

    let result;
    switch (operator) {

        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '%':
            result = firstNum % secondNum;
            break;
        case '**':
            result = firstNum ** secondNum;
    }
    console.log(result);
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');