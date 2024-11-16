document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    //Grab all teh document valuessssss
    const first = document.getElementById("fname").value;
    const last = document.getElementById("lname").value;
    const age = document.getElementById("age").value;
    const TOS = document.getElementById("TOS").checked;

    //input validation wooooo
    if (!first || !last) {
        alert("Please provide your full name!");
        return;
    }

    if (!(age >= 18)) {
        alert("You must be 18 or older to fill out this form.");
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
        password: document.getElementById('password').value,
        state: document.getElementById("location").value
    };

    //Log the form data object!
    console.log(formData);

    //Make an AJAX call now!!!
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form processed successfully.");
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert("Error processing form.");
        }
    };
    xhr.send(); //Send the request!!!
});
