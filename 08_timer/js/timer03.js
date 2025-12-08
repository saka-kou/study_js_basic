const arr = ["HTML", "CSS", "JavaScript", "Pug", "Sass", "TypeScript"];
const skill = document.querySelector("#skill");
let count = 0;

setInterval(() => {
    if (count < arr.length) {
        skill.innerText += arr[count];
        count++
    }
    else {
        return false
    }
}, 3000);