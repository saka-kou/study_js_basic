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
  const result = fruits.find(name => name == text.value);
  // console.log(name.value);
  console.log(result);
  out.innerText = `${result}です`;
}

