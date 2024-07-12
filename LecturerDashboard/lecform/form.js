let form = document.getElementById("form");

function handleForm(event) {
    event.preventDefault();

    let title = document.getElementById("titleInp");
    let venue = document.getElementById("venueInp");
    let description = document.getElementById("descriptionInp");
    let startTime = document.getElementById("starttime");
    let endTime = document.getElementById("endtime");

    let url = "http://localhost:5000/events";

    

}

form.addEventListener("submit", handleForm);