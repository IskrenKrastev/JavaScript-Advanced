function heroicInventory(input) {

    let register = [];
    input.forEach(line => {
        let [name, level, items] = line.split(' / ');
        level = Number(level)
        if(items === undefined){
            items = [];
        }else{
        items = items.split(', ');
        } 
        let hero = {
            name: name,
            level: level,
            items: items,
        }
        register.push(hero);
    });
    return (JSON.stringify(register));
}
console.log(heroicInventory([
    'Isacc / 25 / Apple',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));