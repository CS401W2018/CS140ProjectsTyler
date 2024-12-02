document.getElementById("theFORM").addEventListener("submit", function (event) {
    event.preventDefault();

    // Grab all the input values
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const location = document.getElementById("location").value;
    const comments = document.getElementById("comments").value;

    // Make Sure theyve filled everything out!!!
    if (!firstName || !lastName) {
        alert("Please provide your full name!");
        return;
    }

    if (!email) {
        alert("Please provide a valid email address!");
        return;
    }

    if (!phoneNumber) {
        alert("Please provide a valid phone number!");
        return;
    }

    if (!location) {
        alert("Please select a region!");
        return;
    }

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        location: location,
        comments: comments || "No comments provided",
    };

    console.log(formData);

    //Make an AJAX call now!!!
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = "Thank you for your comment!";
            document.getElementById("theFORM").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert("Error processing form.");
        }
    };
    xhr.send(); //Send the request!!!
});