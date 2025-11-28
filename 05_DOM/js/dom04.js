const btn = document.getElementById("btn");
const text = document.getElementById("text");
const school = document.getElementById("school");

btn.onclick = () => {
    text.innerText = school.value;
}