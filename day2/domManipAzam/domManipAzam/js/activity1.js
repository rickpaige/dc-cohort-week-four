
let firstNameTextField = document.getElementById("firstNameTextField")
let lastNameTextField = document.getElementById("lastNameTextField")

// H1 element 
// <h1>John Doe</h1>
let fullNameHeading = document.getElementById("fullNameHeading")

let submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click",function(){
    // button click 
    console.log("clicked!")

    let firstname = firstNameTextField.value 
    let lastname = lastNameTextField.value 

    // update the heading to show the full name of the person
    // <h1>This is inner HTML</h1>
    fullNameHeading.innerHTML = firstname + " " + lastname 

    // change the body background to red
    document.body.style.backgroundColor = "red"
    document.body.className = "red-body"

    console.log(firstname, lastname)

})