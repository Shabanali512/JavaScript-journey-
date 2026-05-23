// functions 

function SayMyname (){

    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("A");
    console.log("N");
}

SayMyname() 

// function AddTwoNumbers (number1 , number2){

//     console.log(number1 + number2);
// }

// AddTwoNumbers(5,12)


function AddTwoNumbers (number1 , number2){

    let result = (number1 + number2)

    return result
}

const result = AddTwoNumbers(5,12)

// console.log("Result : " , result)


function IsLoggedIn(Username){

    if(Username === undefined){

        console.log("Please enter a name ")
        return
    }

    return ` ${ Username} just logged in `

    
}

// console.log(IsLoggedIn("Shaban"));
// console.log(IsLoggedIn());

function calculateCartPrice (...num){     

  
    return num
} 

console.log(calculateCartPrice(200, 500 ,400))
// rest method or spread method where you can add 
// one or more value in array by using function 


const User = {

    username : "Shaban" ,
    price : 999
}

function HandleObject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

HandleObject(User)


const NewArray = [1,2,3,4,5]

function returnSecondValue(getarray){

    return getarray[1]

}

console.log(returnSecondValue(NewArray))
