const num = Number(prompt("1~50の数値を入力してください"))
for (let i = 1; i <= num; i++) {
    // console.log(`${i}回目`);
}

if (num <= 50) {
    console.log(`${num}回目`);
}

else {
    console.log("1~50の数値を入力してください");
}

