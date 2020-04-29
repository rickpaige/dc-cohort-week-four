let userTextBox = document.getElementById("userTextBox")
let showQuotesButton = document.getElementById("showQuotesButton")
let stockQuoteHeading = document.getElementById("stockQuoteHeading")

showQuotesButton.addEventListener("click", function() {

    let symbol = userTextBox.value 

    setInterval(function() {
        let stockQuote = getStockQuote(symbol)

    stockQuoteHeading.innerHTML = `${stockQuote.name} - $${stockQuote.price}`


    },3000)

    
    
})