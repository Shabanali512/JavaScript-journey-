// arrays 

const myArr = [1,2,3,4,5]

const myHeros = ["Salman khan" , "Imran Khan"]


const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[0]);


// Arrays method 

myArr.push(6)  // value add on end of the array

myArr.pop()  // remove most end value of the array 

myArr.unshift(6) // value add as a most first value of the array

myArr.shift() // remove the first value of the array 


console.log(myArr.includes(2)) // if you check non-existing value so you get a output false or true
console.log(myArr.indexOf(5))
console.log(myArr) ;

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);  // .join method gives a output in the form of string with comma separated values 


// Slice and splice 

console.log("A" , myArr); 

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B" , myArr)
const myn2 = myArr.splice(1,3) 
// when we use splice then we get the output including range 
// but original array cut according to the assign range
// means those values are removed from original one 
// which we assigned inside the splice method

console.log("C" , myArr)
console.log(myn2); 



