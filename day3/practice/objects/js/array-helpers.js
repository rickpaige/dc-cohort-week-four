let numbers = [3,5,6,7]

// finalNumbers = [6,10,12,14]

let finalNumbers =[]

for(let index=0; index < numbers.length; index++) {
    let result = numbers[index] * 2
    finalNumbers.push(result)
}

console.log(finalNumbers)

// ARRAY HELPERS
// Array Helpers ONLY WORK ON AN ARRAY 

// MAP

// numbers.map() // Pass a function that takes a single parameter/argument()

// function doubleValue(number) {
//     return number + 1
// }

// numbers.map(doubleValue)

let array = numbers.map(function(ass) {
    return ass * 3
})

console.log(array)

// let name = "John" 

// name.map(function(c){
//     console.log(c)
// })


// FILTER IS AN ARRAY HELPER
// FILTER CAN ONLY BE CALLED ON AN ARRAY 

let someNumbers = [1,2,3,4,5,6,7,8,9]
// Final result = [1,3,5,7,9]

let oddNumbers = []


for(let i = 0; i < someNumbers.length; i++) {
    if(someNumbers[i] % 2 != 0) {
        oddNumbers.push(someNumbers[i])
    }
}

// Filter will return true/false
// true = item is added to the final array 
// false = item in NOT added to the final array 
let oddNumbersArray = someNumbers.filter(function(idk) {
    return(idk % 2) != 0
})


console.log("ODD NUMBERS")
console.log(oddNumbers)