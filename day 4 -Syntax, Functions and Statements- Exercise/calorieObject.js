function calorieObject(input) {
    let result = {};

    for (let i = 0; i < input.length; i += 2) {
        let fruit = input[i];
        let calories = Number(input[i + 1]);
        result[fruit] = calories
    }
    console.log(result);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);