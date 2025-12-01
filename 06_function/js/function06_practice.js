const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const btnC = document.getElementById("btnC");
const result = document.getElementById("result");

let btn = [btnA, btnB, btnC];
let btnName = ["btnA", "btnB", "btnC"]

function message(msg) {
  result.innerText = `${msg}が押された`;
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener(`click`, () => {
    message(btnName[i]);
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