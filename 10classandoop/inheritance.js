

class User {
    constructor(username){
        this.username = username;

    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`add new cource added by the ${this.username}`);
    }
}

const New = new Teacher("satya", "satya@gmail.com", "1234");
New.addCourse()

const Neww = new User("hi satya");
Neww.logMe()

console.log(New instanceof Teacher);