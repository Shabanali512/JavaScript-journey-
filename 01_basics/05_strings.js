const name = "Shaban"
const repoCount = 12 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) ;
 // that's is called string interpolation


 console.log(name[2]);
 console.log(name.length)

 console.log(name.toUpperCase());
 console.log(name.indexOf('a'));

 const newString = name.substring(0,5)
 console.log(newString)

 const AnotherString = name.slice(-6,2)
 console.log(AnotherString)


 const NewStringOne =  "   Shaban   "
 console.log(NewStringOne);
 console.log(NewStringOne.trim())

 const url = " https://shaban.com/shaban%20ali"
 console.log(url.replace('%20', '-'))

 console.log(url.includes("ali"))
