function stringLength(firstStr, secondStr, thirdStr) {

    let firstLen = firstStr.length;
    let secondLen = secondStr.length;
    let thirdLen = thirdStr.length;

    let sumOfLEngth = firstLen + secondLen + thirdLen;
    let averageSum = sumOfLEngth / 3;
    
    console.log(sumOfLEngth);
    console.log(Math.floor(averageSum));
}
stringLength('chocolate', 'ice cream', 'cake')