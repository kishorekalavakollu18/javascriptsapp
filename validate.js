// validation logic
function validate() {
  //request data gathering logic
  let uname = document.getElementById("user").value;
  let pswd = document.getElementById("pswd").value;
  let regexp = /[a-z][A-Z]/;
  let confirm = document.getElementById("conpswd").value;
  let mobile = document.getElementById("number").value;
  let regexp1 = /[0-9]{10}/;
  let mailid = document.getElementById("email").value;
  //validation logic
  if (uname == "") {
    alert("please enter user name");
    return false;
  }
  if (pswd == "") {
    alert("please enter password");
    return false;
  }
  if (pswd.length < 8 || pswd.length > 12) {
    alert("password should be minimum 8 char and max 12 char");
    return false;
  }
  if (!regexp.test(pswd)) {
    alert("password should be combination of small and capital letters");
    return false;
  }
  if (confirm == "") {
    alert("please enter confirm password");
    return false;
  }
  if (pswd != confirm) {
    alert("password doesnot match");
    return false;
  }
  if (mobile == "") {
    alert("please enter number");
    return false;
  }
  if (!regexp1.test(mobile)) {
    alert("enter 10 digits mobile number");
    return false;
  }
  if (mailid == "") {
    alert("enter mail id");
    return false;
  }
  if (!mailid.includes(".com")) {
    alert("enter valid email");
    return false;
  }

  return true;
}
