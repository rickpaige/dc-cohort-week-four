let userInput = document.getElementById("userInput")
let addTask = document.getElementById("addTask")
let pendingTask = document.getElementById("pendingTask")
let completedTask = document.getElementById("completedTask")

userInput.addEventListener("click", function(){
    let input = userInput.value 
    let li = document.createElement("li")
    let check = document.createElement("input")
    let del = document.createElement("button")

    check.setAttribute("type", "checkbox");
    del.innerHTML = "Delete";
    check.addEventListener("click", function(){
        
    })
    
})