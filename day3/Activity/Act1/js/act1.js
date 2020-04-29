// // let input = [1,2,3,4]
// // let output = []

// // for(let i =0; i < input.length; i++) {
// //     let result = input[i] * 2
// //     output.push(result)
// // }

// // console.log(output)

// let input = [2,3,4,5,6,7,8,10]
// output = []

// for(i = 0; i < input.length; i++) {
//     if(input[i] % 2 == 0) {
//         output.push(input[i])
//     }
// }

// console.log(output)

let users = [
    {name: "Jay", age: 34},
    {name: "John", age: 20},
    {name: "Mary", age: 45}
]


let input = users.find(function(u) {
    return u.name == "Jay"
})

console.log(input.name)
