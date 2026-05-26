const user = {

    username : " Shaban ",
    price : 999 , 

    welcomemessage : function(){

        console.log(`${this.username} , welcome to website `);
        console.log(this);

    }
}

// user.welcomemessage()
// user.username = "Ali"
// user.welcomemessage()

// console.log(this);

function fun(){

    let username = " Shaban"
    console.log(this.username)
}

// fun()

// const chai = function(){

//     let username = "Shaban"
//     console.log(this.username);
// } 

// chai() 


const chai = () => {

    let username = "Shaban"
    console.log(this)
}

// chai()  

// BASICS 
// const AddtwoNumber = (num1 , num2) => { 

//     return num1 + num2 

// } 

// console.log(AddtwoNumber(5 , 12)) 

// Implisive method to creat a arrow function  

// const AddtwoNumber = (num1 , num2) =>  num1 + num2 

//  console.log(AddtwoNumber(5 , 12)) 

 const AddtwoNumber = (num1 , num2) => ({username:"sHABAN"})

 console.log(AddtwoNumber(2,3))