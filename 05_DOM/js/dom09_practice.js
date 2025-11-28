const btnS = document.getElementById("btnS");
const btnL = document.getElementById("btnL");
const text = document.getElementById("wrap");
let fontsize = 16;
const scale = 2;
const alart = document.getElementById("alart");

const fontScale = () => {
    text.style.fontSize = fontsize + "px";
}

btnL.addEventListener("click", () => {
    if (fontsize <= 32) {
        fontsize += scale;
        fontScale();
    }
    else {
        alart.innerText = "これ以上おっきくならないよん";
    }
});


btnS.addEventListener("click", () => {
    if (fontsize > 4) {
        fontsize -= scale;
        fontScale();
    }
    else {
        alart.innerText = "これ以上ちいさくならないよ";
    }
});