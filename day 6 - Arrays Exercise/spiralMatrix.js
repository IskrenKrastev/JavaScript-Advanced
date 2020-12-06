function spiralMatrix(x, y) {

    let counter = 1;
    let matrix = [];
    for (let i = 0; i < x; i++) {
        matrix.push([]);
    }
    let startCol = 0;
    let endCol = x - 1;
    let startRow = 0;
    let endRow = y - 1;

    while (startCol <= endCol && startRow <= endRow) {

        for (let i = startCol; i <= endCol; i++) {

            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {

            matrix[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    matrix.forEach(x => {
        console.log(x.join(' '));
    });
}
spiralMatrix(5, 5);