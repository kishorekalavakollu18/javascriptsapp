//functions in java script
function showMessage() {
  console.log("welcome to js functions");
}
showMessage();

//function with parameters
// sum numbers
function sumnums(a, b) {
  console.log("sum is:" + (a + b));
}
sumnums(10, 2); //arguments

// funtion with return value
//multiplication of numbers
function mulnums(c, d) {
  return c * d;
}
let result = mulnums(2, 3);
console.log("product is:" + result);

// new function syntax in es-6
//arrow function
const arrowDemo = () => {
  console.log("arrow function demo");
};
arrowDemo();

// arrow funtion with parameters
const addNums = (a, b) => {
  console.log("addition is:" + (a + b));
};
addNums(12, 8);

//in a simple way
const addNums1 = (a, b) => a + b;
console.log(addNums1(12, 8));

// arrow function with return a value
const pronums = (a, b) => a * b;
let res = pronums(2, 4);
console.log(res);
