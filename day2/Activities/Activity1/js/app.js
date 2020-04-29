let firstNameText = document.getElementById("firstNameText")
let lastNameText = document.getElementById("lastNameText")
let submitButton = document.getElementById("submitButton")
let fullNameHeading = document.getElementById("fullNameHeading")


submitButton.addEventListener("click",function() {
    // button click 
    console.log("clicked")


    let firstname = firstNameText.value
    let lastname  = lastNameText.value  

    // update the heading to show full name of user 
    fullNameHeading.innerHTML = firstname + " " + lastname

    console.log(firstname, lastname)
})