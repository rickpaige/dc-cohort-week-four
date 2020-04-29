
// access textbox  
let fullNameTextBox = document.getElementById("fullNameTextBox")
// access button 
let submitButton = document.getElementById("submitButton")

//fullNameTextBox.value // ???

/*
function submitButtonPressed() {
    console.log("Submit button pressed")
} */

submitButton.addEventListener("click",function() {

    // get the value in the textbox 
    let fullName = fullNameTextBox.value 
    
    // print out the value on the console 
    console.log(fullName)

})

