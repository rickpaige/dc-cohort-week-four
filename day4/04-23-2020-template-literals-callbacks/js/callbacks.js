
let wordList = document.getElementById("wordList")

function tick() {
    console.log("TICK")
}

// 1000 millisecond is 1 second 
// tick is used here as a callback function
// means that it will be called back in 5 seconds 
// setTimeout is called only once 
//window.setTimeout(tick,5000) 

// setInterval is called repeatedly 
//window.setInterval(tick,2000)


// setInterval using anonymous function 
let id = window.setInterval(function() {
    console.log("TICK")
    let tickItem = `<li>TICK</li>`
    wordList.insertAdjacentHTML('beforeend',tickItem)
},1000)

window.setTimeout(function() {

    // clear or stop the interval
   window.clearInterval(id)

},5000)

function getCustomers() {

    window.setTimeout(function() {
        console.log("TIMEOUT FUNCTION FIRED")
    },1000)

    console.log("GET CUSTOMERS FIRED")

}

getCustomers() 
