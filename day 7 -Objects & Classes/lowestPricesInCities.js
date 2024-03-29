function lowestPricesInCities(input) {

    let result = {};
    input.forEach(line => {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!result[product]) {
            result[product] = {};
            result[product][town] = price;
        } else {
            result[product][town] = price;
        }
    });
    let products = Object.keys(result);
    for (let name of products) {
        let entries = Object.entries(result[name]);
        let sorted = entries.sort((a, b) => {
            return a[1] - b[1]
        });
        console.log(`${name} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}
// lowestPricesInCities(
//     ['Sample Town | Sample Product | 1000',
//         'Sample Town | Orange | 2',
//         'Sample Town | Peach | 1',
//         'Sofia | Orange | 3',
//         'Sofia | Peach | 2',
//         'New York | Sample Product | 1000.1',
//         'New York | Burger | 10'
//     ]);

lowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);