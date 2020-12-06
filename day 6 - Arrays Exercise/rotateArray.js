function rotateArray(input) {

    let rotationValue = Number(input.pop());

    for (let i = 0; i < rotationValue % input.length; i++) {
        input.unshift(input[input.length - 1]);
        input.pop();
    }
    console.log(input.join(' '));
}
rotateArray(['1',
    '2',
    '3',
    '4',
    '2'
]);
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
]);