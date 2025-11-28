const size = document.getElementById("size");
const text = document.getElementById("text");

size.onchange = () => {
    text.innerText = "選択したサイズ:" + size.value + "サイズ";
}