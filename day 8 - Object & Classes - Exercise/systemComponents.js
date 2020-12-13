function systemComponents(input) {

    let listOfSystems = {};

    input.forEach(line => {
        let [system, component, subComponent] = line.split(' | ');

        if (!listOfSystems[system]) {
            listOfSystems[system] = {};
            listOfSystems[system][component] = [];
            listOfSystems[system][component].push(subComponent);
        } else {
            if (listOfSystems[system][component]) {
                listOfSystems[system][component].push(subComponent);
            } else {

                listOfSystems[system][component] = [];
                listOfSystems[system][component].push(subComponent);
            }
        }
    });

    let sortedList = Object.entries(listOfSystems).sort((a, b) => {

        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0])
    });

    sortedList.forEach(line => {

        console.log(line[0]);

        Object.entries(line[1]).sort((a, b) => {
            return b[1].length - a[1].length
        }).forEach(x => {
            console.log(`|||${x[0]}`);
            x[1].forEach(y => {
                console.log(`||||||${y}`);
            })
        })

    });
}
systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])