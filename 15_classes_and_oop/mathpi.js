const descriptor = Object.getOwnPropertyDescriptor(Math,  "PI")

// console.log(descriptor);

const Tea = {

    name : 'Tea ',
    price : 250 , 
    isAvailable : true 
}

console.log(Object.getOwnPropertyDescriptor(Tea,  "name"));

// Object.defineProperty(Tea , 'name', {

//     writable : false,
//     enumerable : false
// })

// console.log(Object.getOwnPropertyDescriptor(Tea,  "name"));


for (let [key , value] of Object.entries(Tea)) {

    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);

    }

    
    
}