function circleArea(arg) {

    let typeOfArg = typeof arg;

    if (typeOfArg !== "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArg}.`);
    } else {
        let radius = arg;
        let area = Math.PI * (radius ** 2);
        console.log(area.toFixed(2));
    }
}
circleArea(5)
circleArea('name')