let email = document.getElementById("email");
let otpBtn = document.getElementById("otpbtn");
let sendOtp = document.getElementById("btn");

let getEmail = localStorage.getItem("email");

email.value = getEmail;

console.log(email.value);

// localStorage.removeItem("email");