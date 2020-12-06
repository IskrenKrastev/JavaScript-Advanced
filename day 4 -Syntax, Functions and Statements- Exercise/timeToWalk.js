function timeToWalk(steps, footprint, speed) {

    let breakInSeconds = 0;
    let distanceInMet = steps * footprint;
    breakInSeconds += Math.floor(distanceInMet / 500) * 60;
    let time = distanceInMet / (speed * 0.277777778);
    time += breakInSeconds
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.ceil(time % 60);
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
