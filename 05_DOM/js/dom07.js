const item_name = document.getElementById("item_name");
const size = document.getElementById("size");
const btn = document.getElementById("btn");
const list = document.getElementById("orderlist");

// console.log(list.innerText = "おちんちん");

// btn.onclick = () => {
//     list.innerText = size.value + "サイズ :" + item_name.value;
// }

btn.onclick = () => {
    list.innerText = `${size.value}サイズ :${item_name.value}`;
}