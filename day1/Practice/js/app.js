// console.log("Introduction to JavaScript")

// // Ways to declare variable
// let a = 10 
// let name = "John"
// var b = 2.55

// // use const for values that don't change
// const pi = 3.147 

// // this will return an error because we are changing a constant value
// // pi = 3.5 


// // functions
// function sayHello() {
//     console.log("Hello")
// }

// // call func sayHello()
// sayHello()

// displayName("John Doe") // you can call a function before func is declared

// function displayName(name) {
//     console.log(name)
// }

// displayName("John Doe") // console returns John Doe

// function add(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber)
// }

// add(2,3) // console returns 5

// function getName(name) {
//     return name + " Something"
// }

// let fullName = getName("John")
// console.log(fullName) // console returns John Something





// ARRAYS
let tasks = [] // creating an empty array 

// add itmes to array 
tasks.push("Wash the car")
tasks.push("Feed the dog")
tasks.push("Clean room")
// console.log(tasks) // outputs tasks array to the console

// delete items from an array 
// let deletedTask = tasks.pop() // removes last item in array and returns it, best to use variable

// console output Feed the dog has been removed
// console.log(deletedTask + " has been removed")

// DELETING ITEM BASED ON INDEX
// removes 0th index from tasks array, which is Wash the car
// delete tasks[0] 
// console.log(tasks)

// DELETING ITEM USING SPLICE
// starting from 0th index, remove 1 file, which is Wash the car
// tasks.splice(0,1) 
// console.log(tasks)

// ITERATING AN ARRAY 
// index is declared as 0, if index(0) is less than tasks.length(2) return index + 1
// for(let index = 0; index < tasks.length; index++) {
//     console.log(index) // returns 0 +new line+ 1
// }


// for(let index = 1; index <= 10; index++) {
//     console.log(index) // returns 1 - 10 on new lines
// }

// // reverse order
// for(let index = 10; index > 0; index--) {
//     console.log(index) // retrns 10 - 1 on new lines
// }



// print items of array 
for(let index = 0; index < tasks.length; index++) {
    console.log(tasks[index])
}

// console.log(tasks[0]) // wash the car 
// console.log(tasks[1]) // Feed dog
// console.log(tasks[10]) // returns undefined since not listed



// CONDITIONS are used to evaluate if something is true or false
// console.log("Conditions")

// let version = 2
// let os = "Win10"

// // && = and 
// if(version == 1 && os == "Win10")  { // conditon is satisfied 
//     console.log("Version is 1")
// } else if(version == 2 && os == "macOs") { // condition is not
//     console.log("Version is 2")
// } else if(version == 2 || os == "macOs") { // || = or cond met
//     console.log("Version is 2")
// } else if(version == 3) {
//     console.log("Version is 3")
// }


// // CODE TO CHECK IF THE LETTER IS A VOWEL (a, e, i, o, u)
// // let letter = "c"

// function vowel(letter) {
//     if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
//         console.log("VOWEL")
//     } else {
//         console.log("NOT A VOWEL")
//     }
// }

// vowel("u")
// vowel("h")
