function processOddNumbers(input) {

    let oddNumbers = [];
    input.forEach(x => {
        let index = input.indexOf(x)
        input[index] = ''
        if (index % 2 !== 0) {
            oddNumbers.push(x)
        }
    });
    oddNumbers = oddNumbers.map(x => x * 2);
    oddNumbers = oddNumbers.reverse();


    console.log(oddNumbers.join(' '));
}
//processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);