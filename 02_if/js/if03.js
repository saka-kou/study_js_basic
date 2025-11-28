const item = 3000;
let wallet = Number(prompt());

if (wallet > item) {
    console.log("購入できるね");
}

else if(wallet == item) {
    console.log("ピッタリだね！");
}

else{
    console.log("買えないよん");
}    