let form = document.getElementById("myForm");

function handleForm(event) {
    event.preventDefault();
    
    let user_name = document.getElementById("Username");
    let first_name = document.getElementById("firstname");
    let last_name = document.getElementById("lastname");
    let email = document.getElementById("floatingInput");
    let password = document.getElementById("floatingPassword");
    let choice = document.getElementById("selection");

    // if (!user_name || !first_name || !last_name || !email || !password || !choice) {
    //     console.error("One or more required elements are missing.");
    //     return;
    // }

    let student_url = "http://localhost:5000/api/students";
    let lecturer_url = "http://localhost:5000/api/lecturers";

    const data = {
        user_name: user_name.value.trim(),
        first_name: first_name.value.trim(),
        last_name: last_name.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
    };

    async function addPerson(url, data) {
        try {
            let response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                },
            });
            let responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message || "Failed to register.");
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (choice.value === "Student") {
        addPerson(student_url, data);
        // window.location = "/index.html";
    } else if (choice.value === "Lecturer") {
        addPerson(lecturer_url, data);
        // window.location = "/index.html";
    } else {
        console.error("Invalid choice.");
    }
}

form.addEventListener("submit", handleForm);
