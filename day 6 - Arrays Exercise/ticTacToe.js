function ticTacToe(input) {

    let dashboard = [];
    let isWin = false;

    function isRowWin() {
        for (let i = 0; i < dashboard.length; i++) {

            if (dashboard[i][0] === 'X' || dashboard[i][0] === "O") {
                let isWiner = dashboard[i].every((val, i, arr) => val === arr[0]);
                if (isWiner === true) {
                    isWin = true;
                    break;
                }
            }
        }
        if (isWin === true) {
            return true;
        }
    }

    function isColWin() {
        for (let i = 0; i < dashboard.length; i++) {
            let isTrue = 0
            for (let j = 0; j < dashboard.length - 1; j++) {

                if (dashboard[0][i] === 'X' || dashboard[0][i] === 'O') {
                    if (dashboard[j][i] === dashboard[j + 1][i]) {
                        isTrue++
                    }
                }

            }
            if (isTrue >= 2) {
                isWin = true
                break;
            }

        }
        if (isWin === true) {
            return true;
        }
    }

    function isDiagWin() {
        for (let i = 0; i < dashboard.length; i++) {
            let isLEft = 0
            let isRigth = 0
            let l = 0;
            let r = 2;
            let r2 = 0;

            for (let i = 0; i < dashboard.length; i++) {
                if (dashboard[0][0] === 'X' || dashboard[0][0] === 'O') {
                    if (dashboard[l][l] === dashboard[l + 1][l + 1]) {
                        l++
                        isLEft++
                    }
                }

                if (dashboard[0][dashboard.length - 1] === 'X' || dashboard[0][dashboard.length - 1] === 'O') {
                    if (dashboard[r2][r] === dashboard[r2 + 1][r - 1]) {
                        isRigth++;
                        r--;
                        r2++;
                    }
                }

                if (isLEft === 2 || isRigth === 2) {
                    isWin = true;
                    break;
                }
            }

        }

        if (isWin === true) {
            return true;
        }
    }


    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push('false')
        }
        dashboard.push(row)
    }

    let player = 'X';

    for (let i = 0; i < input.length; i++) {
        let isIncludedFalse = true;


        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i].includes('false')) {
                isIncludedFalse = true;
            } else {
                isIncludedFalse = false;
            }
        }
        if (isIncludedFalse === false) {
            break;
        }
        let [a, b] = input[i].split(' ');

        a = Number(a);
        b = Number(b);

        let move = dashboard[a][b];

        if (move === 'false') {
            dashboard[a][b] = player;
        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }


        if (isRowWin()) {
            break;
        }

        if (isColWin()) {
            break;
        }

        if (isDiagWin()) {
            break;
        }


        if (player === 'X') {
            player = 'O'
        } else {
            player = 'X'
        }
    }
    if (isWin === false) {
        console.log('The game ended! Nobody wins :(');
        dashboard.forEach(x => {
            console.log(x.join('\t'));
        });
    } else {
        console.log(`Player ${player} wins!`);
        dashboard.forEach(x => {
            console.log(x.join('\t'));
        });

    }
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);
ticTacToe(["0 2",
    "0 0",
    "1 1",
    "1 0",
    "2 0",
    "1 2",
    "2 2",
    "2 1",
    "0 1"
]);
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"
]);
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "1 0",
    "2 1",
    "2 0",
    "1 1",
    "1 0",
    "2 2",
    "0 0"
]);