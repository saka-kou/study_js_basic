const start = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const reset = document.querySelector("#resetBtn");
const out = document.querySelector("#out");
let timerId;
let num = 0;

start.addEventListener(`click`, () => {
    if (!timerId) {
        timerId = setInterval(() => {
            num++;
            console.log("たいまー");
            out.innerText = num;
        }, 1000);
    }
})

stopBtn.addEventListener(`click`, () => {
    console.log("すとっぷー");
    clearInterval(timerId);
    timerId = null;
})

reset.addEventListener(`click`, () => {
    clearInterval(timerId);
    timerId = null;
    num = 0;
    out.innerText = num;
})