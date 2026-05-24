// var c = 300

let a = 200 

if(true){

    let a = 10
    const b = 20 
    console.log("Inner : " , a); 

}

console.log(a);

function one() {

    const Username = "Shaban"
    
    function two(){

        const website = "youtube"
        console.log(Username);
    }

    two()
}
one()


if(true){

    const username = "Shaban"
    if(username === "Shaban"){

        const website = "   Youtube"
        console.log(username + website)


    }


}


// **********************************

function addone(num){

    return num + 1
} 
console.log(addone(5)); 

// expression we call this way to create a function 

const addtwo = function(num1){

    return num1 + 2 
}

console.log(addtwo(7))

