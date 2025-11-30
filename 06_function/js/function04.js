const num = document.getElementById("num");
const input = document.getElementById("input");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

function setpx(set) {
    return set + (`${set} + px`)
}

btn.onclick = () => {
    input.innerText = num.value;
    num.value = setpx(num.value);
    result.innerText = num.value;
}
