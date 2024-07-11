let form = document.getElementById("myForm");

function handleForm(event) {
    event.preventDefault();
    let user_name = document.getElementById("Username");
    let first_name = document.getElementById("firstname");
    let last_name = document.getElementById("lastname");
    let email = document.getElementById("floatingInput");
    let password = document.getElementById("floatingPassword");
    let choice = document.getElementById("selection");

    let student_url = "http://localhost:5000/api/students";
    let lecturer_url = "http://localhost:5000/api/lecturers";

    const data = {
        user_name: user_name.value,
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        password: password.value,
    };

    async function addPerson(url, data) {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
            },
        });
        let data = await response.json();
    }

    if (choice.value === "Student") {
        addPerson(student_url, data);
    } else {
        addPerson(lecturer_url, data);
    }
}

form.addEventListener("submit", handleForm);
