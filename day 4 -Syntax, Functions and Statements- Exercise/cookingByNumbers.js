function cookingByNumbers(input) {

    let result = Number(input.shift());

    for (let command of input) {

        switch (command) {
            case 'chop':
                result /= 2;
                console.log(result);
                break;

            case 'dice':
                result = Math.sqrt(result);
                console.log(result);
                break;

            case 'spice':
                result += 1;
                console.log(result);
                break;

            case 'bake':
                result *= 3;
                console.log(result);
                break;

            case 'fillet':
                result = result - result * 0.2;
                console.log(result);
                break;
        }
    }
}
cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);