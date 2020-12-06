function lastKNumberSequance(n, k) {

    let kNumbers = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        for (let j = kNumbers.length - 1; j > kNumbers.length - 1 - k; j--) {

            if (kNumbers[j] !== undefined) {
                sum += kNumbers[j];
            }
        }
        kNumbers.push(sum)
    }
    console.log(kNumbers.join(' '));
}
lastKNumberSequance(6, 3);
lastKNumberSequance(8, 2);