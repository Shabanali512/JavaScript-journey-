const user = {

    username : "Shaban",
    loginCount : 8 ,
    signedIn : true ,

    getUserDetails: function(){

        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
        console.log(this)
    }

}

// console.log(user.username)

function User(username , loginCount , isLoggedIn){

    this.username = username;
    this.loginCount = loginCount ;
    this.isLoggedIn = isLoggedIn ; 
}

const userOne = new User("Shaban" ,12 , true )
const userTwo = new User("Ali" , 11 , false)

console.log(userOne);
console.log(userTwo);

