const score = 100 
console.log(score)


const balance = new Number(100)
console.log(balance)

console.log(balance.toString()) 
console.log(typeof balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const Number1 = 123.456
console.log(Number1.toPrecision(3))

const rupees = 1000000
console.log(rupees.toLocaleString('en-IN'));

//****************************Math***************************

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,3,6,7));
console.log(Math.max(4,6,8,9));

console.log(Math.random());
console.log((Math.random()*10) +1 );
console.log(Math.floor(Math.random()*10) +1);

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1 )) + 1 )