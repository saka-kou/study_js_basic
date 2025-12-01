const text = document.getElementById("text");
const btn = document.getElementById("btn");
const out = document.getElementById("out");
// const inner = document.getElementById("text").value;

function message(val) {
    out.innerText = (`あなたの入力した文字は${val}です`);
}

btn.onclick = () => {
    message(text.value);
}

// btn.onclick = () => {
//     message(inner);
// }