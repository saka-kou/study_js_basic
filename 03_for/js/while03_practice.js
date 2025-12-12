//残金
let wallet = 12800;
//価格
let price = 980;
let price_down = 230;
let count = 0;

// for (let i = 1; i <= 20; i++) {
//     if (i < 5) {
//         wallet -= price;
//         console.log(wallet);
//     } else if (wallet >= price) {
//         wallet -= price - price_down;
//         console.log(wallet);
//         console.log(`買い物終了。${i - 1}個買えた。`);
//         break
//     }
// }

while (wallet > price) {
    wallet -= price;
    count++
    console.log(`${count}回目の買い物成功。残金は${wallet}円`);
    if (count == 4) {
        console.log("特別タイムセール開催‼️‼️");
        price = price - price_down;
    }
    else if (wallet < price) {
        console.log(`買い物終了${count}個買えた`);
    }
}

