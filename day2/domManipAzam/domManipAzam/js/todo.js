
let taskNameTextBox = document.getElementById("taskNameTextBox")
let addTaskButton = document.getElementById("addTaskButton")

// ul 
let tasksList = document.getElementById("tasksList")

addTaskButton.addEventListener("click",function() {

    // create an html element
    //let h1 = document.createElement("h1")

    // create li element 
    let liItem = document.createElement("li")

    // assign task name to inner html 
    liItem.innerHTML = taskNameTextBox.value 

    // add liItem to the ul 
    // appendChild is going to add the element to the parent 
    // 
    tasksList.appendChild(liItem)

    // assign the task name to html element 
    //h1.innerHTML = taskNameTextBox.value

    // add that html element on the page 

    //document.body.appendChild(h1)

})

