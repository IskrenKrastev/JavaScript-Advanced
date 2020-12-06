function sameNumbers(num) {
    let isSame = true;

    num = String(num)
    num = num.split('');
    for (let i = 0; i < num.length; i++) {
        if (num[i + 1] !== undefined) {
            if (Number(num[i]) !== Number(num[i + 1])) {
                isSame = false;
                break;
            }
        }
    }

    if (isSame === true) {
        console.log('true');
    } else {
        console.log(false);
    }
    let sum = 0;
    num.forEach(el => {
        sum += Number(el)
    });
    console.log(sum);
}
sameNumbers(2222222)
sameNumbers(1234)