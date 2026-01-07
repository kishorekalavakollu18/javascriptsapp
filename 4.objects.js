//objects in js
const movieInfo = {
  moviename: "akhanda2",
  heroname: "balayya",
  directorname: "boyapati",
};
//how to get specific
console.log(movieInfo.directorname);
console.log(movieInfo["heroname"]);
for (let info in movieInfo) {
  console.log(movieInfo[info]);
}
//es-6+ new features
// object.keys
Object.keys(movieInfo).forEach((key) => {
  console.log(key);
});
//to get only values
// Object.values
Object.values(movieInfo).forEach((val) => {
  console.log(val);
});
//to get key and  values
//  Object.entries
Object.entries(movieInfo).forEach((entry) => {
  console.log(entry[0] + "" + entry[1]);
});
//for of
for (let [info, infovalue] of Object.entries(movieInfo)) {
  console.log(info + " " + infovalue);
}

// nested object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);

//card obbject
const placeorder = {
  products: [
    {
      pid: 1001,
      pname: "ac",
      price: 20000,
    },
    { pid: 2045, pname: "drone", price: 50000 },
  ],
  shippingaddress: {
    area: "vadlamudi",
    street: "vignan",
    pincode: 450984,
  },
  userinfo: {
    uname: "kishore",
    uid: 1021,
  },
};
console.log(placeorder.userinfo.uname);
