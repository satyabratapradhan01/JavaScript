function SetUserName(username){
    this.username = username;
    console.log('called');
}

function createUser(username, email, password){
    SetUserName.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("satya", "satya@gmail.com", "1234");
console.log(chai)