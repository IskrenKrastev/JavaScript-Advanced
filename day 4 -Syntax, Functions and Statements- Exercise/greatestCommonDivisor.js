function greatestCommonDivisor(divident, divisor) {

    let newDivisor;

    while (newDivisor !== 0) {
         newDivisor = divident % divisor
         divident = divisor
         divisor = newDivisor
    }
    console.log(divident);
}
greatestCommonDivisor(84, 18);
greatestCommonDivisor(2154, 458);