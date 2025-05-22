function multipleBy5(num){
    return num * 5
}

multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, scope){
    this.username = username;
    this.scope = scope;
}

createUser.prototype.increment = function(){
    this.scope++;
}

createUser.prototype.printMe = function (){
    console.log(`score is ${this.scope}`)
}

const chai = new createUser('chai', 25);
const tea = createUser('tea', 250);

chai.printMe()