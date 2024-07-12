let form = document.getElementById("myForm");
let createAccountBtn = document.getElementById("create")
function handleForm(event) {
    event.preventDefault();
    let password = document.getElementById("floatingPassword").value;
    let remember = document.getElementById("rememberMeSwitch").value;
    let user = document.getElementById("floatingInput").value;
    let loginBtn = document.getElementById("login");
    let choice = document.getElementById("selection");

    // verify a student
    let student_url = "http://localhost:5000/api/students/";
    let lecturer_url = "http://localhost:5000/api/lecturers/";
    async function verifyPerson(url, userName) {
        response = await fetch(url + userName);
        data = await response.json();
        return data;
    }

    loginBtn.addEventListener("click", async function () {
        if (choice.value === "Student") {
            let res = await verifyPerson(student_url, user);
            if (user === "" || password === "") {
                loginBtn.disabled = true;
            } else if (data["id"] != null) {
                loginBtn.disabled = true;
                window.location = "/StudentDashboard/student.html";
            } else {
                alert("you are not registered");
                loginBtn.disabled = false;
            }
        } else {
            let res = await verifyPerson(lecturer_url, user);
            if (user === "" || password === "") {
                loginBtn.disabled = true;
            } else if (data["id"] != null) {
                loginBtn.disabled = true;
                window.location = "/LecturerDashboard/lecturer.html";
            } else {
                alert("you are not registered");
                loginBtn.disabled = false;
            }
        }
    })
}
form.addEventListener('submit', handleForm);

createAccountBtn.addEventListener("click", function () {
    window.location = "/Registeration/register.html";
})
