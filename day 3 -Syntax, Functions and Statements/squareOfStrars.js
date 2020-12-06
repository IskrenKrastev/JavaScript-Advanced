function squareOfStars(input) {

    for (let i = 0; i < input; i++) {
        let arr = [];
        for (let j = 0; j < input; j++) {
            arr.push('*')
        }
        console.log(arr.join(' '));
    }
}
squareOfStars(1)
squareOfStars(2)
squareOfStars(5)