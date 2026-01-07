//datatypes in javascript
var empid = 2001;
console.log(typeof empid); //number
var esalary = 49000.99;
console.log(typeof esalary);
var emobilenumber = 9885645252;
console.log(typeof emobilenumber);
var ename = "kishore";
console.log(typeof ename);
var pemp = false;
console.log(typeof pemp);
var pf = null;
console.log(typeof pf);
var b;
console.log(typeof b);
var empdesg = ["hr", "developer", "manager"];
console.log(typeof empdesg);
var customerinfo = {
  cid: 1001,
  cname: "kishore",
  caddress: "guntur",
};
console.log(typeof customerinfo);
//Es-6 new datatypes;
var tcsturnover = BigInt(213456789876543444444432);
console.log(typeof tcsturnover);
var pname = Symbol("realme");
var pname1 = Symbol("realme");
console.log(typeof pname);
console.log(pname === pname1);
