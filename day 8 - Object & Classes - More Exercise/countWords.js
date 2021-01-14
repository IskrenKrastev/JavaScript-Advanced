function countWordsInAText(input) {

    let pattern = /[a-zA-Z0-9_]+/g;
    let matched = input[0].matchAll(pattern);
    let result = {};

    for (let word of matched) {

        if (!result[word]) {
            result[word] = 1;
        } else {
            result[word] += 1;
        }
    }
    console.log(JSON.stringify(result));
}
countWordsInAText(["Far too slow, you're far too slow."]);
countWordsInAText(['JS devs use Node.js for server-side JS.-- JS for devs']);