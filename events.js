function btnresult() {
  alert("hi");
}
let btnvalue = document.getElementById("demo");
btnvalue.addEventListener("click", btnresult);
// click logic by using arrow function
const btnresult1 = () => {
  alert("hello");
};
let btnvalue1 = document.getElementById("demo1");
btnvalue1.addEventListener("click", btnresult1);
// mouse over logic
let h1val = document.getElementById("sample");
const mousehoverlogic = () => {
  h1val.style.color = "blue";
};
//const mouseout logic
const mouseoutlogic = () => {
  h1val.style.color = "";
};
h1val.addEventListener("mouseover", mousehoverlogic);
h1val.addEventListener("mouseout", mouseoutlogic);
