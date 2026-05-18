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





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  there 2 types of memory 
// stack (Jaha pe primitive datatype h waha pr stack use hoti h ) and 
// Heap  (Jaha pr non-primitive h datatype waha pr Heap use goti h ) 

let myYoutubeName = "Shaban_Ali"

let AnotherNmae = myYoutubeName 

 AnotherNmae = " Ali_Shaban" 

console.log(myYoutubeName);
console.log(AnotherNmae);

let UserOne = {

    email : "shaban@gmaail.com",

}

let UserTwo = UserOne 

console.log(UserTwo)

console.log("After Chnage")

UserTwo.email = "Shaban@google.com"

console.log(UserOne);
console.log(UserTwo);


