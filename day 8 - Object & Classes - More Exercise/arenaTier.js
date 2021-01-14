function arenaTier(input) {

    let gladiators = {};

    for (let line of input) {

        if (line === 'Ave Cesar') {
            break;
        }

        if (line.includes(' -> ')) {
            let [name, technique, skill] = line.split(' -> ');
            skill = Number(skill);

            if (!gladiators[name]) {
                gladiators[name] = {};
                gladiators[name][technique] = skill;
            } 
            if (!gladiators[name][technique]) {
                gladiators[name][technique] = 0;
            }
            if (gladiators[name][technique] < skill) {
                gladiators[name][technique] = skill;
            }
        } else {
            let [firstGlad, secondGlad] = line.split(' vs ');

            if (gladiators[firstGlad] && gladiators[secondGlad]) {
                let isWin = false;
                let firsTechnique = Object.keys(gladiators[firstGlad]);
                let secondTechnique = Object.keys(gladiators[secondGlad]);

                for (let tech of firsTechnique) {

                    for (let tech2 of secondTechnique) {

                        if (tech === tech2) {
                            let totalOne = Object.values(gladiators[firstGlad]).reduce((a, b) => a + b);
                            let totalTwo = Object.values(gladiators[secondGlad]).reduce((a, b) => a + b)
                            if (totalOne > totalTwo) {
                                delete gladiators[secondGlad];
                                isWin = true;
                                break;
                            } else if (totalOne < totalTwo) {
                                delete gladiators[secondGlad];
                                isWin = true;
                                break;
                            }
                        }
                    }
                    if (isWin === true) {
                        break;
                    }
                }
            }
        }

    }
    let sortedGladiators = Object.entries(gladiators).sort((a, b) => {

        let totalSkillA = Object.values(a[1]).reduce((a, b) => a + b);
        let totalSkillB = Object.values(b[1]).reduce((a, b) => a + b);
        return totalSkillB - totalSkillA || a[0].localeCompare(b[0]);

    }).forEach(line => {

        let totalSkill = Object.values(line[1]).reduce((a, b) => a + b);
        console.log(`${line[0]}: ${totalSkill} skill`);

        let sortedLine = Object.entries(line[1]).sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0])
        }).forEach(x => {
            console.log(`- ${x[0]} <!> ${x[1]}`);
        });


    });
}
arenaTier([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
]);
arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]);