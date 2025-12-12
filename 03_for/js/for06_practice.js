//残金
let wallet = 12800;
//価格
let price = 980;

let price_down = 230;

// for (let i = 1; i <= 20; i++) {
//     // console.log();
//     if (i < 5) {
//         wallet -= price;
//         console.log(wallet);
//         console.log(`買い物終了${i}回買えた。残金は${wallet}円`);
//     } else if (wallet <= price_down) {
//         console.log(`買い物終了${i - 1}個買えた`);
//         break
//     }
//     else if (i >= 5) {
//         wallet -= price_down
//         console.log(wallet);
//         console.log(`買い物終了${i}回買えた。残金は${wallet}円`);
//     }
//     else {
//         console.log(wallet);
//     }
// }

for (let i = 1; i <= 20; i++) {
    if (i < 5) {
        wallet -= price;
        console.log(wallet);
    } else if (wallet >= price) {
        wallet -= price - price_down;
        console.log(wallet);
        // console.log(`${i}回目の買い物成功。残金は${wallet}円です。`);
    } else {
        console.log(`買い物終了。${i - 1}個買えた。`);
        break
    }
}
