function townsToJSON(input) {

    input = input.map(row => row.split('|').filter(x => x !== '').map(x => x.trim()));

    let [Town, Latitude, Longitude] = input.shift();
    let towns = [];

    input.forEach(line => {
        let [currTown, currLat, currLong] = line;

        let townInfo = {
            Town: currTown,
            Latitude: Number(Number(currLat).toFixed(2)),
            Longitude:Number( Number(currLong).toFixed(2)),
        }
        towns.push(townInfo)
    });

    console.log(JSON.stringify(towns));
}
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);