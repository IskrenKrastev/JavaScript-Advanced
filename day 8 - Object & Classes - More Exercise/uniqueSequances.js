function uniqueSequences(input) {

    input = input.map(arr => JSON.parse(arr))
    input = input.map(line => line.sort((a, b) => b - a))
    input = input.map(x => JSON.stringify(x));
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j <= input.length; j++) {
            if (input[i] === input[j]) {
                input.splice(j, 1);
                i = -1
            }
        }
    }
    input = input.map(x => JSON.parse(x));
    input = input.sort((a, b) => a.length - b.length);
    input.forEach(line => {
        console.log(`[${line.join(', ')}]`);
    });
}

// uniqueSequences([
//     "[-3, -2, -1, 0, 1, 2, 3, 4]",
//     "[10, 1, -17, 0, 2, 13]",
//     "[4, -3, 3, -2, 2, -1, 1, 0]"
// ]);
uniqueSequences([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
])