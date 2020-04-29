// access textbox
let fullNameTextBox = document.getElementById("fullNameTextBox")
// access submit button
let submitButton = document.getElementById("submitButton")

// function submitButtonPressed() {
//     console.log("Submit button pressed")
// }

submitButton.addEventListener("click",function() {
    // get the value in the textbox
    let fullName = fullNameTextBox.value
    console.log(fullName)
})

// console.log(fullNameTextBox.value)
