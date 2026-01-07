// promiseschaining
const bookticket = () => {
  return new Promise((resolve, reject) => {
    resolve("ticket booked");
  });
};
const getpopcorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "  popcorn bought");
  });
};

const getcoke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "  coke bought");
  });
};
//to execute
bookticket()
  .then((result) => {
    return getpopcorn(result);
  })
  .then((result) => {
    return getcoke(result);
  })
  .then((result) => {
    console.log("wanna go to  movie  " + result);
  })
  .catch((error) => {
    console.log(error);
  });
