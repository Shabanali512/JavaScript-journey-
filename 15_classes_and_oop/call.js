function SetUsername(username) {

    // complex DB calls 

    this.username = username 
    console.log("called");
    
    
}

function createUser(username , email , password){

    SetUsername.call(this ,username)

    this.email = email 
    this.password = password

}

const User1 = new createUser("Shaban" , "Shaban@gmail.com" , "321")
console.log(User1);
