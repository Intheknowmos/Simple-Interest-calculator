
// Get elements from DOM


let principalAmount = document.getElementById("principal-amount")
let rateInterest = document.getElementById("rate-interest")
let timeElapsed = document.getElementById("time-elapsed")
let actualTime = document.getElementById("actual-time")

const calculateBtn = document.getElementById("calculate-btn")
const displayInterest = document.getElementById("display")
const clearBtn = document.getElementById("clear-btn")
const displayTotal = document.getElementById("display-total")

// Create variables

let amount = 0
let rate = 0
let time = 1
let simpleInterest = 0

let actual = 1

let totalTime = time * actual

// Listen and collect values from all necessary inputs

principalAmount.addEventListener("change", function (){
   amount = principalAmount.value

   if (amount < 1) {
       alert  ("Amount must be over 1")
   }else {
       return amount
   }
})

rateInterest.addEventListener("change", function (){
    rate = rateInterest.value

    if (rate < 0) {
        alert  ("Rate must be over 0")
    }else {
        return rate
    }
})

// Listen for input and select value 


timeElapsed.addEventListener("change", function (){
    time = timeElapsed.value
})


actualTime.addEventListener("change", function (){
    actual = actualTime.options[actualTime.options.selectedIndex].value
    
    if (actual === "1"){
        console.log(typeof actual)
        return Number(actual)
    }else if (actual === "0.0833"){
        return Number(actual) * 12 
    }else {
        return Number(actual) * 52
    }
})


// Create Calculate button Function

calculateBtn.addEventListener("click", function (a, r, t){
    if (amount && rate && totalTime) {
        totalTime = actual * time 
        const simpleInterest = Math.floor(amount * rate * totalTime / 100)
        const totalAmount = Math.floor(Number(amount) + simpleInterest)
        let calc = ""
        let total = ""
        
        calc += `
            <p id="simple"> The total accrued Simple Interest is $${simpleInterest} </p>
        `
        displayInterest.innerHTML = calc

        total += `
            <p id="total-simple"> The total amount plus Simple Interest is $${totalAmount} </p>
        `
        displayTotal.innerHTML = total
    }else {
        alert ("Please fill in all values")
    }
})

// Create Clear button function

clearBtn.addEventListener("click", function (){
    amount = ""
    rate = ""
    time = ""
    calc = ""
    total = ""
    displayInterest.innerHTML = ""
    displayTotal.innerHTML = ""
    principalAmount.value = ""
    rateInterest.value = ""
    timeElapsed.value = ""
})
