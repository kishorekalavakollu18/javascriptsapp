// bind method
const movieinfo = {
  heroname: "vijay",
  villianname: "dev shetty",
  moviedetails: function () {
    return this.heroname + " " + this.villianname;
  },
};
const bahubali = {
  heroname: "prabhas",
  villianname: "rana",
};
const movieresult = movieinfo.moviedetails.bind(bahubali);
console.log(movieresult());
