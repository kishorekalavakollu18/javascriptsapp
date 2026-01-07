//multi lines string
let desc = `top college in ap
more recruitments
more activities`;
console.log(desc);
//string interpolation
let fristName = "kishore";
let lastName = "kalavakollu";
console.log(`${fristName} ${lastName}`);
//array destructing
let pName = ["realme", "lg", "vivo"];
let [brand1, brand2, brand3] = pName;
console.log(brand1);
console.log(brand2);
console.log(brand3);
//object destructing
const movieinfo = {
  movie: "bahubali",
  director: "rajamouli",
  producer: "shobu",
};
let { movie, director, producer } = movieinfo;
console.log(movie);
console.log(director);
console.log(producer);
