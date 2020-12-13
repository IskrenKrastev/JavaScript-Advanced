function storeCatalogue(input) {

    let listOfProducts = {};

    input.forEach(line => {
        let [product, price] = line.split(' : ');
        listOfProducts[product] = Number(price);
    });
    let sortedList = Object.entries(listOfProducts).sort((a, b) => a[0].localeCompare(b[0]));

    let letter = ''
    for (let product of sortedList) {
        let newletter = product[0][0]

        if (newletter !== letter) {
            console.log(newletter);
            letter = newletter
        }
        console.log(` ${product[0]}: ${product[1]}`);
    }
}
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])
storeCatalogue([
    'Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
])