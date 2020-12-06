function magicMatrices(input) {

    let isMAgic = true;

    for (let i = 0; i < input.length - 1; i++) {
        let sumCol = 0;
        let plusSumCol = 0;
        let rowSum = input[i].reduce((a, b) => a + b, 0);
        let plusRowSum = input[i + 1].reduce((a, b) => a + b, 0);

        for (let j = 0; j < input.length; j++) {
            sumCol += input[i][j];
            plusSumCol += input[i + 1][j];
        }
        if (sumCol !== plusSumCol || rowSum !== plusRowSum) {
            isMAgic = false;
            break;
        }
    }
    console.log(isMAgic);
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);