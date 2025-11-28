// 画面を更新する度に0-5までのランダムな値が入る
const no = Math.floor(Math.random() * 5);
let omikuji = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];
let resalt = omikuji[no];

if (resalt == omikuji[0]) {
    console.log(`${omikuji[0]}ですおめでとう！`);
}
else if (resalt == omikuji[1]) {
    console.log(`${omikuji[1]}ですラッキー！`);
}
else if (resalt == omikuji[2]) {
    console.log(`コメントに困る${omikuji[2]}です`);
}
else if (resalt == omikuji[3]) {
    console.log(`${omikuji[3]}です`);
}
else if (resalt == omikuji[4]) {
    console.log(`${omikuji[4]}ですアンラッキー`);
}
else {
    console.log(`${omikuji[5]}です残念,,,`);
}

// console.log(omikuji[no]);



