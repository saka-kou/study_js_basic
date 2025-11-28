let PS = Number(prompt());
let AI = Number(prompt());
let total = PS + AI;
let average = total / 2;

console.log(`Photoshopは${PS}点ね、Illustratorは${AI}点ね、平均${average}点`);

if (average >= 0 && average <= 30) {
    console.log("もう少し頑張りましょう");
}

else if (average >= 31 && average <= 60){
    console.log("まずまずね");
}

else if (average >= 61 && average <= 100) {
    console.log("がんばったね");
}

else{
    console.log("嘘を付くんじゃない");
}
