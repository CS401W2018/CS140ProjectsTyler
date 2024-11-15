document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    const first = document.getElementById("fname").value;
    const last = document.getElementById("lname").value;
    const age = document.getElementById("age").value;
    
    if (!first || !last){
        alert("Please provide your full name!!!");
        return;
    }

    if(!(age >= 18)){
        alert("You must be 18 to fill out this form");
        return;
    }

    const formData = {
        firstName: first,
        lastName: last,
        password: document.getElementById('password').value,
        state: document.getElementById("location").value
    }


    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status == 200){
            alert("Form submitted successfully.");
            const response = JSON.parse(xhr.response);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = ""
        }
        else if (xhr.readyState === 4){
            alert("error submitting form.")
        }
    }
    xhr.send(JSON.stringify(formData))
    console.log(formData);
})