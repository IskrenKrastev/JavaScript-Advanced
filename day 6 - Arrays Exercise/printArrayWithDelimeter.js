function printArrayWithDelimeter(input) {

    let delimeter = (input.pop());
    console.log(input.join(`${delimeter}`));
}
printArrayWithDelimeter(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
]);
printArrayWithDelimeter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_'
]);