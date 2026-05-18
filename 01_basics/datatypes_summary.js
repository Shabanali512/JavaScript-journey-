// there are mainly 2 categories of datatypes 
// primitive and non-primitve 

// primitve (call by value )

// 7 types : string , Number , boolean , null , undefined , symbol , BigInt 

const score = 100 
const scoreValue = 100.3 

const isLoggedIn = false 
const OutsideTemp = null 

let userEmail; 

const Id =  Symbol("123")
const AnotherId = Symbol("123")

console.log(Id === AnotherId) 


// non-primitive (call by reference)

// arrays , object , function 

const heros = ["Salman khan", "Sharukh Khan" , "Amir khan" , "Imran Khan"]

const myObj = {
    
    name : 'Shaban' , 
    age  : '21',

}

const myFunction = function(){

    console.log("Hello World")

}

