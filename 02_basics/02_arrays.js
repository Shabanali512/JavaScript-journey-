const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , " batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); 
// console.log(marvel_heros[3][0]);

// otherway  to concatenate 

const allHeros = marvel_heros.concat(dc_heros)  
//  this method gives you proper output after concatenate 

console.log(allHeros);


// another method which spread method 

const All_new_heros = [...marvel_heros , ...dc_heros]
console.log(All_new_heros);


const Another_array = [1,2,3,4 , ["Shaban" , "Ali" , 12 ,[14,72]]]

const handle_complex_array = Another_array.flat(Infinity)

console.log(handle_complex_array);  


console.log(Array.isArray("Shaban"));
console.log(Array.from("Shaban"));
console.log(Array.from({name : "Shaban"}));


let score1 = 100 
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1 , score2 , score3));