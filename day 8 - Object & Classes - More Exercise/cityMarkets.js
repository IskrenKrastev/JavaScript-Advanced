function cityMarkets(input) {

    let result = {};

    input.forEach(line => {
        let [town, product, moneyArr] = line.split(' -> ');
        let [sales, price] = moneyArr.split(' : ');
        let amountSales = Number(sales) * Number(price);

        if (!result[town]) {
            result[town] = {};
            result[town][product] = amountSales;
        } else {
            result[town][product] = amountSales;
        }
    });

    Object.entries(result).forEach(x => {

        console.log(`Town - ${x[0]}`);

        Object.entries(x[1]).forEach(y => {
            console.log(`$$$${y[0]} : ${y[1]}`);
        });
    });
}
cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);