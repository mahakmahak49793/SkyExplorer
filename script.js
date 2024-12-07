var x = document.getElementById("login");
var y = document.getElementById("signup");
var z = document.getElementById("btn");
let backbtn = document.getElementById("back");
let form = document.getElementById("form");
let signinbtn = document.getElementById("signin-btn");

form.style.display = "none";

function signup() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}

signinbtn.addEventListener("click", () => {
  if (form.style.display == "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});
backbtn.addEventListener("click", () => {
  form.style.display = "none";
});
