// ES6 

class user  {

    constructor(username , email , password){

        this.username = username ;
        this.email = email;
        this.password = password ;
    }

    encryptPassword(){

        return `${this.password}abc`
    }
}

const User1 = new user("Shaban" , "shaban@gmail.com" , "321")
console.log(User1.encryptPassword());



// behind the scene  

function User(username , email , password){ 

    this.username = username ;
    this.email = email;
    this.password = password ;

}

User.prototype.encryptPassword = function(){

    return `${this.password}abc`
}

const User2 = new User("Ali" , "ALi@gmail.com" , "456")
console.log(User2.encryptPassword());
