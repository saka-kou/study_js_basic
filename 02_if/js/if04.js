let time = Number(prompt());


if (time >= 1 && time <= 6){
    console.log("おやすみなさい");    
}

if (time == 12){
    console.log("お昼ご飯");
}

if (time >= 7 && time <= 11) {
    console.log("おはようございます");
}

if (time >= 13 && time <= 17) {
    console.log("こんにちは");
}

if (time >= 18 && time <= 24) {
    console.log("こんばんは");
}

if (time < 0 || time > 24) {
    console.log("そんな時間ありません");   
}