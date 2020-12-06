function populationsInTowns(input) {

    let towns = {};
    input.forEach(line => {
        let [town, population] = line.split(' <-> ');
        population = Number(population);

        if (!towns[town]) {
            towns[town] = population;

        } else {
            let oldPopul = towns[town];
            oldPopul += population;
            towns[town] = oldPopul;
        }
    });

    for (let town of Object.entries(towns)) {
        console.log(`${town[0]} : ${town[1]}`);
    }
}
populationsInTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
])