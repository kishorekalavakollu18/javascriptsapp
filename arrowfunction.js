const arrow = (a, b, ...c) => {
  console.log(a, b, c);
};
arrow(10, 20, 30, 40, 50);

//default parameters
//addnums
const addNums = (a = 10, b) => {
  console.log(a + b);
};
addNums();
