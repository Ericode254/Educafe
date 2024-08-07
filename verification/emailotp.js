let sendBtn = document.getElementById("sendbtn");

async function deleteUser(url, email) {
    let res = await fetch(url + email, {
        method: "DELETE",
    });
    let data = await res.json();
    return data;
}

function sendOtp() {
    let email = document.getElementById("email");

    let getEmail = localStorage.getItem("email");
    email.value = getEmail;

    let otpVal = Math.floor(Math.random() * 10000);
    let emailBody = `Your Educafe otp is ${otpVal}`;
    Email.send({
        SecureToken: "",
        To: email.value,
        From: "",
        Subject: "Email verification",
        Body: emailBody
    }).then(
        message => {
            if (message === "OK") {
                alert("OTP sent to your email " + email.value);

                let otpInp = document.getElementById("otp_inp");
                let otpBtn = document.getElementById("otpbtn");

                let url = "http://localhost:5000/events/"

                let trials = 3;
                let i = 1;

                while (i <= trials + 1) {
                    otpBtn.addEventListener("click", () => {
                        if (otpInp.value === otpVal) {
                            alert("Email address verified...");
                            localStorage.removeItem("email");
                        } else if (i === trials) {
                            alert("You failed to validate your email, please register with a valid email");
                            deleteUser(url, email.value);
                            localStorage.removeItem("email");
                            window.location = "/Registeration/register.html";
                        } else {
                            alert("Invalid otp");
                        }
                    })
                }
            }
        }
    );
}


sendBtn.addEventListener("click", sendOtp);
