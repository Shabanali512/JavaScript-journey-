// objects 2 tarike sy bnaye ja skte hain  
// 1- objects with construction jis ko hum singleton b kehty hain 
// 2- objects literals 

const mySym = Symbol("key1")

const JsUser = {

    name : "Shaban",
    [mySym] : "myKey1",
    age : 21 , 
    location : "Lahore",
    "check" : "Print",
    email : "Shaban@google.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday" , "Saturday"]
}

// 2 ways to access object 

// console.log(JsUser.name);
// console.log(JsUser["name"]); 

// there is only way to access the check element 

// console.log(JsUser["check"]);

// symbol aaccess 

// console.log(JsUser[mySym]);

JsUser.email = "Shaban@usa.com"

// Object.freeze(JsUser)   // if you want to freeze the object 

JsUser.email = "Shaban@uk.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}` );
}

console.log(JsUser.greetingTwo());
