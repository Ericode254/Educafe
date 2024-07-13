let sendBtn = document.getElementById("sendbtn");

function sendOtp() {
    let email = document.getElementById("email");

    // let getEmail = localStorage.getItem("email");
    // email.value = getEmail;

    let otpVal = Math.floor(Math.random() * 10000);
    let emailBody = `Your Educafe otp is ${otpVal}`;
    Email.send({
        SecureToken: "81f94e24-1159-4ce8-b57a-9bbd714bfee0",
        To: email.value,
        From: "jilloerick6@gmail.com",
        Subject: "Email verification",
        Body: emailBody
    }).then(
        message => {
            if (message === "OK") {
                alert("OTP sent to your email " + email.value);

                let otpInp = document.getElementById("otp_inp");
                let otpBtn = document.getElementById("otpbtn");

                otpBtn.addEventListener("click", () => {
                    if (otpInp.value === otpVal) {
                        alert("Email address verified...");
                        // localStorage.removeItem("email");
                    } else {
                        alert("Invalid otp");
                    }
                })
            }
        }
    );
}


sendBtn.addEventListener("click", sendOtp);
