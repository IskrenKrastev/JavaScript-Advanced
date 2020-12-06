function wordsUppercase(input) {

    input = input.toUpperCase();
    let pattern = /[A-Za-z0-9]+/g;
    let matched = input.matchAll(pattern);
    let arr = []
    if (matched !== null) {
        for (let word of matched) {
            arr.push(word)
        }
        console.log(arr.join(', '));
    }
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
wordsUppercase('Functions in JS can be nested, i.e. hold other functions');