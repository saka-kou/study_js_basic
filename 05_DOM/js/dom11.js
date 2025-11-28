const bg = document.querySelector("#bg");
const array = ["tomato", "skyblue", "lightseagreen"];
const btn = document.querySelectorAll(".changeBtn");
// const btn = document.getElementsByTagName("button");

// console.log(btn);
// console.log(bg);
// console.log(array);
// console.log(btn[i]);

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = (evt) => {
        bg.style.backgroundColor = evt.target.style.backgroundColor;
    }
}

// console.log("こんにちは");

// bg.onclick = () => {
//     // bg.style.backgroundColor = "#tomato";
//     console.log("こんにちは");
// }

