const mynums = [1,2,3]

// const  total = mynums.reduce(function (acc , currval){

//     console.log(`acc : ${acc} and current value : ${currval}`);

//     return acc + currval

// }, 0)

// console.log(total); 

const total = mynums.reduce((acc , currval) => acc + currval , 0 )

console.log(total); 