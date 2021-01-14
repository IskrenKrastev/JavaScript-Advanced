function gameOfEpicness(obj, input) {

    let listOfKingdoms = {};

    for (let currKingdom of obj) {
        if (!listOfKingdoms[currKingdom.kingdom]) {
            listOfKingdoms[currKingdom.kingdom] = {}
            listOfKingdoms[currKingdom.kingdom][currKingdom.general] = {
                army: currKingdom.army,
                wins: 0,
                losses: 0,
            }
        } else {
            if (listOfKingdoms[currKingdom.kingdom][currKingdom.general]) {
                listOfKingdoms[currKingdom.kingdom][currKingdom.general].army += currKingdom.army
            } else {
                listOfKingdoms[currKingdom.kingdom][currKingdom.general] = {
                    army: currKingdom.army,
                    wins: 0,
                    losses: 0,

                }
            }
        }
    }

    input.forEach(line => {
        let [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = line;

        if (attackingKingdom !== defendingKingdom) {

            if (listOfKingdoms[attackingKingdom][attackingGeneral].army > listOfKingdoms[defendingKingdom][defendingGeneral].army) {
                listOfKingdoms[attackingKingdom][attackingGeneral].wins += 1;
                listOfKingdoms[defendingKingdom][defendingGeneral].losses += 1;
                listOfKingdoms[attackingKingdom][attackingGeneral].army = Math.floor(listOfKingdoms[attackingKingdom][attackingGeneral].army + listOfKingdoms[attackingKingdom][attackingGeneral].army * 0.10)
                listOfKingdoms[defendingKingdom][defendingGeneral].army = Math.floor(listOfKingdoms[defendingKingdom][defendingGeneral].army - listOfKingdoms[defendingKingdom][defendingGeneral].army * 0.10);

            } else if (listOfKingdoms[attackingKingdom][attackingGeneral].army < listOfKingdoms[defendingKingdom][defendingGeneral].army) {
                listOfKingdoms[defendingKingdom][defendingGeneral].wins += 1;
                listOfKingdoms[attackingKingdom][attackingGeneral].losses += 1;
                listOfKingdoms[attackingKingdom][attackingGeneral].army = Math.floor(listOfKingdoms[attackingKingdom][attackingGeneral].army - listOfKingdoms[attackingKingdom][attackingGeneral].army * 0.10);
                listOfKingdoms[defendingKingdom][defendingGeneral].army = Math.floor(listOfKingdoms[defendingKingdom][defendingGeneral].army + listOfKingdoms[defendingKingdom][defendingGeneral].army * 0.10);
            }
        }
    });


    let sortedKingdoms = Object.entries(listOfKingdoms).sort((a, b) => {
        let allWinsA = 0;
        let allLossesA = 0;
        let allWinsB = 0;
        let allLossesB = 0;

        Object.entries(a[1]).forEach(x => {
            allWinsA += Number(Object.values(x[1])[1]);
            allLossesA += Number(Object.values(x[1])[2])
        });

        Object.entries(b[1]).forEach(x => {
            allWinsB += Number(Object.values(x[1])[1]);
            allLossesB += Number(Object.values(x[1])[2])
        });



        return allWinsB - allWinsA || allLossesA - allLossesB || a[0].localeCompare(b[0])

    })
   
        console.log(`Winner: ${sortedKingdoms[0][0]}`);
        let winners = Object.entries(sortedKingdoms[0][1]).sort((a, b) => {
            let aa = Object.values(a[1])[0];
            let bb = Object.values(b[1])[0]
            return bb - aa
        }).forEach(x => {
            console.log(`/\\general: ${x[0]}`);
            Object.entries(x[1]).forEach(log => {
                console.log(`---${log[0]}: ${log[1]}`);
            })
        });
    
}
gameOfEpicness([{
            kingdom: "Maiden Way",
            general: "Merek",
            army: 5000
        },
        {
            kingdom: "Stonegate",
            general: "Ulric",
            army: 4900
        },
        {
            kingdom: "Stonegate",
            general: "Doran",
            army: 70000
        },
        {
            kingdom: "YorkenShire",
            general: "Quinn",
            army: 0
        },
        {
            kingdom: "YorkenShire",
            general: "Quinn",
            army: 2000
        },
        {
            kingdom: "Maiden Way",
            general: "Berinon",
            army: 100000
        }
    ],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
    ]
)