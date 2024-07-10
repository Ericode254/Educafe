let form = document.getElementById("myForm");
function handleForm(event) {
    event.preventDefault();
    let password = document.getElementById("floatingPassword").value;
    let remember = document.getElementById("rememberMeSwitch").value;
    let user = document.getElementById("floatingInput").value;
    let loginBtn = document.getElementById("login");
    // verify a student
    let url = "http://localhost:5000/api/students/"
    console.log(remember);
    async function verifyStudent(userName) {
        response = await fetch(url + userName);
        data = await response.json();
        return data;
    }
    loginBtn.addEventListener("click", async function () {
        let data = await verifyStudent(user);
        if (user === "" || password === "") {
            loginBtn.disabled = true;
        }else if (data["id"] != null) {
            loginBtn.disabled = true;
            window.location = "/StudentDashboard/student.html";
        } else {
            alert("you are not registered");
            loginBtn.disabled = false;
        }

        user = " ";
        password = " ";
    })
}
form.addEventListener('submit', handleForm);
