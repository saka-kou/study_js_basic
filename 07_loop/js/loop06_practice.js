const name = document.querySelectorAll(".name");
const price = document.querySelectorAll(".price");
const total = document.querySelector("#total");
const NumPrices = [];

price.forEach(e => {
    NumPrices.push(parseInt(e.textContent));
});

const totalPrice = NumPrices.reduce((prev, current) => prev + current);
total.innerText = `${totalPrice}円`;

// const fruits = price.map((e) => {
//     console.log(e);
//     return e
//})
// const result = fruits.reduce((prev, current) => prev + current.e, 0);
// console.log(result);
// priceArray.forEach((e, i) => {
//     // console.log(e.innerHTML);

//     const result = priceArray.reduce((prev, current) => prev + current.e, 0);
// });

// console.log(result);
// console.log(name[0].innerText);
// for (let i = 0; i < name.length; i++) {
//     const fruits = [
//         { name: name[i].innerHTML, price: price[i].innerHTML },
//         { name: name[i].innerHTML, price: price[i].innerHTML },
//         { name: `キウイ`, price: 400 },
//         { name: `レモン`, price: 200 }
//     ];
//     console.log(fruits);
// }


// const result = fruits.reduce((prev, current) => prev + current.price, 0);

// console.log(result);

// total.innerText = `${result}円`;



