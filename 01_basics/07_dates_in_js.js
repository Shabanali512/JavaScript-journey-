// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());


console.log(typeof myDate);  
// date datatype is Object in Javascript most asking question in interviews 

let myNewDate = new Date(2026 , 4 , 20);
console.log(myNewDate.toDateString());

let myTimeStamp = new Date();
console.log(myTimeStamp);
console.log(myNewDate.getTime());

console.log(Math.floor(myTimeStamp/1000));  // asking on interviews most of the time 

let newDate = new Date();

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());

newDate.toLocaleString('default' , {

    weekday: "long"
});

