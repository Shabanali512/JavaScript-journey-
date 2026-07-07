let myHeros = ["thor" , "spiderman"]

let heroPower = {

    thor : "hammer",
    spiderman : "sling" ,

    getSpiderPower : function(){

        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Shaban = function(){

    console.log("Shaban is present in all objects");
    
}

Array.prototype.heyShaban = function(){

    console.log("Shaban says hellow");
    
}

heroPower.Shaban()
myHeros.Shaban()
myHeros.heyShaban()


const Teacher = {

    makeVideo : true 
}

const TeachingSupport = {

    isAvailable : false
}

const TAsupport = {

    makeAssignment : 'JS assignment ',
    fullTime : true
}


// modern syntax 

let anotherUsername = "JavaScript "

String.prototype.truelength = function (){

    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
}

anotherUsername.truelength()
"Shaban".truelength()