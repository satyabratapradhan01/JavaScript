// this key word is reffers to current context of object

const user = {
    username: "satya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}


// user.welcomeMessage();
// user.username = "sonu";
// user.welcomeMessage();

// function chai(){
//     console.log(this);
// }

// chai()


// const chai = function(){
//     let username = "satya";
//     console.group(this.username);
// }

// chai()


// const chai = () => {
//     let username = "satya";
//     console.log(this.username)
// }
// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));
