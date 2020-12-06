function evenPositionElements(input) {

    let evenNums = input.filter(x => {
        return input.indexOf(x) % 2 == 0;
    });
    console.log(evenNums.join(' '));
}
evenPositionElements(['20', '30', '40']);
evenPositionElements(['5', '10']);