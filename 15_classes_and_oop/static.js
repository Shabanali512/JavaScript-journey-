class User {

    constructor(username){

        this.username = username

    }

    logMe(){

        console.log(`Username ${this.username}`);
        
    }

    static creatID(){

        return `123`
    }
}

const Shaban = new User("Shaban")
// console.log(Shaban.creatID);

class Teacher extends User {

    constructor(username , email){

        super(username)
        this.email = email

    }
}

const iphone = new Teacher("iphone " , "iphone@gmail.com")
iphone.logMe();


