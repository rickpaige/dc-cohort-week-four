
let taskTextBox = document.getElementById("taskTextBox")
let addTaskButton = document.getElementById("addTaskButton")

let taskList = document.getElementById("taskList")

// METHOD 2 
function removeTask2(e) {
    // e.srcElement is a button element 
    console.log(e.srcElement)
}

// METHOD 1 
function removeTask(btn) {
    // btn.parentElement is LI
    //console.log(btn.parentElement)

    taskList.removeChild(btn.parentElement)
    //console.log('remove task was called')
}

addTaskButton.addEventListener("click", function () {

    // create li element and add to the ul
    let taskName = taskTextBox.value

    let taskItem = `<li>
                        <input type='checkbox' />
                        <label>${taskName}</label>
                        <button onclick='removeTask(this)'>Remove</button>
                        <button onclick='removeTask2(event)'>Remove Using Event</button>
                    </li>`

        
        
    //taskList.innerHTML = taskList.innerHTML + taskItem

    // THIS WORKS but it is not performance efficient because you are 
    // concatenating strings again and again for each item
    //taskList.innerHTML += taskItem

    // adding the new html to the end of the ul list. 
    // beforeend is used to add the new HTML to the end of the UL 
    taskList.insertAdjacentHTML('beforeend',taskItem)

})