const fruits = [
  { name: 'apple', price: 180 },
  { name: 'banana', price: 230 },
  { name: 'lemon', price: 200 },
  { name: 'peach', price: 480 },
  { name: 'kiwi', price: 80 },
  { name: 'mango', price: 680 }
];

const btn = document.querySelector("#btn");
const out = document.querySelector("#out");
const text = document.querySelector("#name");

btn.onclick = () => {
  // console.log(text.value);
  // const result = fruits.find(name => name == text.value);
  const result = fruits.find(e => e.name == text.value);
  console.log(result);
  // console.log(result.name, result.price);
  out.innerText = `${result.name}：価格は${result.price}円です`;
}


// const data = test.find( value => {
//   return e.name == text.value;
// });

// const data = test.find( (value,data) =>  e.name == text.value);
