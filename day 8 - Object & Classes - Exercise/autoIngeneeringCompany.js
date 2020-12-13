function autoIngeneeringCompany(input) {

    let list = {};

    input.forEach(line => {
        let [brand, model, produced] = line.split(' | ');
        produced = Number(produced);

        if (!list[brand]) {
            list[brand] = {};
            list[brand][model] = produced;
        } else {
            if (!list[brand][model]) {
                list[brand][model] = produced;
            } else {
                list[brand][model] += produced;
            }
        }
    });
    currentCar = ''
    Object.entries(list).forEach(line => {
        let newCar = line[0];
        if (newCar !== currentCar) {
            console.log(newCar);
            currentCar = newCar;
        }
        for (let currBand of Object.entries(line[1])) {
            console.log(`###${currBand[0]} -> ${currBand[1]}`);

        }
    });
}
autoIngeneeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])