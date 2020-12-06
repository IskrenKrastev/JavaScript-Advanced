function addAndRemoveElements(input) {

    let num = 1;
    let newArray = [];
    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command === 'add') {
            newArray.push(num);
        } else {
            newArray.pop()
        }
        num++;
    }
    if (newArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join('\n'));
    }
}
addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'
]);