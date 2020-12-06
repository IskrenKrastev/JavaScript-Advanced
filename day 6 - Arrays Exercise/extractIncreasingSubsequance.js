function extractIncreasingSubsequence(input) {

    let maxNum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= maxNum) {
            maxNum = input[i];
        } else {
            input.splice(i, 1)
            i--
        }
    }
    console.log(input.join('\n'));
}
extractIncreasingSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
extractIncreasingSubsequence([1,
    2,
    3,
    4
]);
extractIncreasingSubsequence([20,
    3,
    2,
    15,
    6,
    1
]);