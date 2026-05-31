const mynums = [1,2,3,4,5,6,7,8,9]

//  const after_adding = mynums.map((num) => num + 12)  

// called it chaining 

const Newnums = mynums.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 30)

 console.log(Newnums);
 