// //arrays in js
// const demoArray = [10, 20, 30, "hi"];
// console.log(demoArray);
// //literal syntax
let pName = ["sumsung", "realme", "redmi", "zerox", "oppo"];
// //object syntax
let prices = new Array(20000, 40000, 50000, 2000);
// //to get values
// console.log(pName[2]);
// for (let names of pName) {
//   console.log(names);
// }

// //for each method
let p = pName.forEach((value) => {
  console.log(value);
});
// to add push,unshift,splice
pName.push("apple");
console.log(pName);

// unshift method
pName.unshift("poco");
console.log(pName);

//splice
pName.splice(2, 0, "moto");
console.log(pName);
//to remove pop,shift,splice
pName.pop("moto");
console.log(pName);
pName.shift();
console.log(pName);
pName.splice(0, 2);
console.log(pName);
// delete pName[1];
//console.log(pName);
// sort
console.log(pName.sort);
//reverse
console.log(pName.reverse());
//update
pName[1] = "motopro";
console.log(pName);
//concatenation
let pnamess = ["sum"];
console.log(pnamess.concat(pName));

//spread operator
let pnames1 = [...pnamess, ...pName];
console.log(pnames1);

//array advanced method
let sum = prices.reduce((total, value) => {
  return total + value;
});
console.log(sum);

//map
let offerprices = prices.map((value) => {
  return value - 2000;
});
console.log(offerprices);
