function cappyJuice(input) {

    let juices = {};
    let bottles = {};

    input.forEach(line => {
        let [name, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!juices[name]) {
            juices[name] = quantity
        } else {
            juices[name] += quantity;
        }
        if (juices[name] >= 1000) {
            bottles[name] = Math.floor(juices[name] / 1000)
        }
    });

    Object.entries(bottles).forEach(line => console.log(`${line[0]} => ${line[1]}`))
}
cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
])