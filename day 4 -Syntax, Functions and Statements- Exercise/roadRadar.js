function roadRadar(input) {

    let [speed, area] = input;
    let limit = 0

    switch (area) {

        case 'motorway':
            limit = 130
            if (speed > limit && speed <= limit + 20) {
                console.log('speeding');
            } else if (speed > limit + 20 && speed <= limit + 40) {
                console.log('excessive speeding');
            } else if (speed > limit + 40) {
                console.log('reckless driving');
            }
            break;
        case 'interstate':
            limit = 90;
            if (speed > limit && speed <= limit + 20) {
                console.log('speeding');
            } else if (speed > limit + 20 && speed <= limit + 40) {
                console.log('excessive speeding');
            } else if (speed > limit + 40) {
                console.log('reckless driving');
            }
            break;

        case 'city':
            limit = 50;
            if (speed > limit && speed <= limit + 20) {
                console.log('speeding');
            } else if (speed > limit + 20 && speed <= limit + 40) {
                console.log('excessive speeding');
            } else if (speed > limit + 40) {
                console.log('reckless driving');
            }
            break;
        case 'residential':
            limit = 20;
            if (speed > limit && speed <= limit + 20) {
                console.log('speeding');
            } else if (speed > limit + 20 && speed <= limit + 40) {
                console.log('excessive speeding');
            } else if (speed > limit + 40) {
                console.log('reckless driving');
            }
            break;
    }

}
roadRadar([70, 'city']);
roadRadar([40, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);