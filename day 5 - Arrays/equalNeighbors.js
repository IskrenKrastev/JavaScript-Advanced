function equalNeighbors(input) {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {

        for (let j = 0; j < input[i].length; j++) {

            if (input[i + 1] !== undefined && input[i][j] === input[i + 1][j]) {
                counter++
            }

            if (input[i][j + 1] !== undefined && input[i][j] === input[i][j + 1]) {
                counter++
            }
        }

    }
    console.log(counter);
}
equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]);
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);