document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    //Grab all teh document valuessssss
    const first = document.getElementById("fname").value;
    const last = document.getElementById("lname").value;
    const pass = document.getElementById("password").value
    const age = document.getElementById("age").value;
    const location = document.getElementById("location").value
    const TOS = document.getElementById("TOS").checked;

    //input validation wooooo
    if (!first || !last) {
        alert("Please provide your full name!");
        return;
    }

    //Checks if age is null, if the input is not a number, and if the user is 18 or older, if any of these are true than we go into the if statement
    if (!age || isNaN(age) || age <= 18) {
        alert("You must be 18 or older to fill out this form.");
        return;
    }

    if(!pass){
        alert("Please create a password")
        return;
    }

    if(!location){
        alert("Please pick a location!")
        return;
    }

    if(!TOS){
        alert("You must agree to the terms and conditions")
        return;
    }

    //form data object
    const formData = {
        firstName: first,
        lastName: last,
        password: pass,
        location: location
    };

    //Log the form data object!
    console.log(formData);

    //Make an AJAX call now!!!
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
            alert("Form processed successfully.");
        } else if (xhr.readyState === 4) {
            alert("Error processing form.");
        }
    };
    xhr.send(); //Send the request!!!
});
