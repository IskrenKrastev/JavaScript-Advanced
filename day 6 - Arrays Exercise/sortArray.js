function sortArray(input) {

    let sortedArray = input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(sortedArray.join('\n'));
}
sortArray(['alpha',
    'beta',
    'gamma'
]);
sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);
sortArray(['test',
    'Deny',
    'omen',
    'Default'
]);