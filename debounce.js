// requestdata gathering logic
let btn = document.getElementById("demo");
let clickresult = document.getElementById("simple");
let triggerresult = document.getElementById("sample");
//business logic
let clickcount = 0;
let triggercount = 0;
// debounce method
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}
const debounceresult = debounce(() => {
  triggercount++;
  triggerresult.innerHTML = `triggered ${triggercount}`;
}, 1000);
btn.addEventListener("click", () => {
  clickcount++;
  clickresult.innerHTML = `user entered characters ${clickcount}`;
  debounceresult();
});
