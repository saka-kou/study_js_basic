// const btnA = document.getElementById("btnA");
// const btnB = document.getElementById("btnB");
// const btnC = document.getElementById("btnC");
// let btnName = ["btnA", "btnB", "btnC"];
// let btn = [btnA, btnB, btnC];
// console.dir(btns[0]);
const btns = document.querySelectorAll(".btn");
const result = document.getElementById("result");


function message(msg) {
  result.innerText = `${msg}が押された`;
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener(`click`, () => {
    message(btns[i].textContent);
  })
}

// btnA.onclick = () => {
//   result.innerText = "btnAが押された";
// }

// btnB.onclick = () => {
//   result.innerText = "btnBが押された";
// }

// btnC.onclick = () => {
//   result.innerText = "btnCが押された";
// }