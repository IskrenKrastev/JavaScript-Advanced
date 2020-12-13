function tickets(arr, criterion) {

    let result = [];
    let sortedResult;

    arr.forEach(line => {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        result.push({
            destination: destination,
            price: price,
            status: status,
        })
    });

    if (criterion === 'destination') {
        sortedResult = result.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        });
    } else if (criterion === 'price') {
        sortedResult = result.sort((a, b) => {
            return a.price - b.price
        });
    } else if (criterion === 'status') {
        sortedResult = result.sort((a, b) => {
            return a.status.localeCompare(b.status)
        })
    }
    return sortedResult;
}
console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'))