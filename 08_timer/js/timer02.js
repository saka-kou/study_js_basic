const counter = document.querySelector("#counter");
let count = 0;
const duration = 1000;

function setTimer() {
    if (count < 10) {
        count++;
        counter.innerText += count;
        setTimeout(setTimer, duration);
    }
    else {
        return false;
    }
}
setTimer();