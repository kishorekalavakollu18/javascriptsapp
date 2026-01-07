// withoutclosure
let counter = 1; //global scope
const counterresult = () => {
  let counter = 0; // local scope
  counter += 1;
  return counter;
};
console.log(counterresult());
console.log(counterresult());
console.log(counterresult());
