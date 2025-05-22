// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("satya", "satya@gmail.com", "123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const the = new user("satya", "satya@gmail.com", "1234");

console.log(the.encryptPassword());
console.log(the.changeUsername());