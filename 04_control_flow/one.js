const temperature = 45 

if(temperature < 50){
    console.log("Temperature is less then 50 degree")

}
else {

    console.log("Temperature is greater then 50 degree")
}


let score = 200 

if(score > 100){

    const power = "fly"
    console.log(`user power is ${power}`)
}


let balance = 1000 

if(balance < 500){
    console.log("less then 500")
}else if (balance < 750){
    console.log("less then 750")

}else {

    console.log("less then 1100")
}


const userloggedIn = true 
const Debitcard = true 
const loggedInfromGoogle = false 
const loggenInfromEmail = true

if(userloggedIn && Debitcard && 2==2){

    console.log(" Allow to buy this course ")

}
if(loggedInfromGoogle || loggenInfromEmail){
    console.log("user logged in")

}