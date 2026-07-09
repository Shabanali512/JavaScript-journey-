class User {

    constructor(email , password){

        this.email = email;
        this.password = password 

    }

    get email(){

        return this._email.toUpperCase()
    }
    set email(value1){

         this._email = value1 
    }
    get password(){

        return this._password.toUpperCase()
    }

    set password(value){

         this._password = value
    }
}

const User1 =  new User("user@gmail.com" , "abc")
console.log(User1.password);
console.log(User1.email);
