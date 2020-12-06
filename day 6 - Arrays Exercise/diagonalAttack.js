function diagonalAttacvk(input) {
    let rightSum = 0;
    let leftSum = 0;
    let n = input.length - 1


    function leftDiagonal() {
        for (let i = 0; i < input.length; i++) {
            let splitedLine = input[i].split(' ');
            let lNum = Number(splitedLine[i])
            leftSum += lNum;
        }
        return leftSum
    }

    function rightDiagonal() {
        for (let i = 0; i < input.length; i++) {
            let splited = input[i].split(' ');
            let rNum = Number(splited[n]);
            rightSum += rNum;
            n--
        }
        return rightSum;
    }

    if (leftDiagonal() !== rightDiagonal()) {
        console.log(input.join('\n'));
    } else {
        let n = input.length - 1;
        for (let i = 0; i < input.length; i++) {
            input[i] = input[i].split(' ');
            input[i] = input[i].map(x => Number(x));

            for (let num in input[i]) {
                num = Number(num)
                if ((num) !== i && (num) !== n)
                    input[i][num] = rightSum
            }
            n--;
        }
        input.forEach(x => {
            console.log(x.join(' '));
        })

    }

}
// diagonalAttacvk([
//     '5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1'
// ]);
diagonalAttacvk([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);