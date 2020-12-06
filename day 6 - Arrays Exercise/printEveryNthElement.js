function printEveryNthElement(input) {

    let step = Number(input.pop());

    for (let i = 0; i < input.length; i += step) {
        console.log(input[i]);
    }
}
printEveryNthElement(['5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);
printEveryNthElement(['dsa',
    'asd',
    'test',
    'tset',
    '2'
]);
printEveryNthElement(['1',
    '2',
    '3',
    '4',
    '5',
    '6'
]);