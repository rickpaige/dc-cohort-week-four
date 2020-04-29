let word = "cat"
let reverse = ""

// for(let i = 0; i < word.length; i++) {
//     console.log(word[i])
// }


for(let i = word.length; i >= 0; i--) {
    reverse = word[i : : -1]
}

console.log(reverse)