//ananymous function ,name less
let prices = [20000, 30000, 40000, 50000];
const newprices = prices.map((val) => {
  return val - 5000;
});
console.log(newprices);
//callback function as named function
function pushpa() {
  console.log("thaggedhey ley");
}
function panindiamovie(sukumarmovie) {
  return sukumarmovie;
}
panindiamovie(pushpa());
