function usernames(input) {

    let finalNames = [];

    for (let name of input) {
        if (!finalNames.includes(name)) {
            finalNames.push(name);
        }
    }
    let sortedNames = finalNames.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    });

    console.log(sortedNames.join('\n'));
}
usernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);
usernames(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
])