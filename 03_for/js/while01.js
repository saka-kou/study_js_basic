let hp = 999;
let mp = 100;
let doMP = 7;
while (hp > 0) {
    hp -= 60;
    console.log("残りHP" + hp);
}

while (mp > 0) {
    mp -= doMP;
    console.log("残りMP" + mp + "です");
    if (mp < doMP) {
        console.log("もうないよ笑");
        break;
    }
}