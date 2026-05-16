// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2==2);
// console.log(2!=1);

// console.log("2" >1);
// console.log(2 >"1");


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); 

// Note: 

// The reason is that an equality check == and comparison > < >= <= work differently. 
// comparison convert null to a  number , treating it as 0 .
// That's why (3) null >= 0 is true and (1) null > 0  is false. 
 

// ===  this operator check strictly means check a datatype as well

console.log("2" ===2); 