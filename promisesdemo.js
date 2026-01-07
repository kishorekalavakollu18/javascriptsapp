// promises demo
const movierating = new Promise((resolve, reject) => {
  let rating = 3;
  if (rating > 4) {
    resolve("good movie");
  } else {
    reject("waste of our time");
  }
});
// to call promise
movierating
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
