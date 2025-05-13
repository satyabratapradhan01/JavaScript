function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
}

//refrance // exiqution
// sayMyName();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    // here num1 and num2 are called parameter
// }

 function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
 }

// 10 and 20 both are argument
const result = addTwoNumbers(10, 20);
// console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        
    }
    return `${username} just logged in`;
}

let user = loginUserMessage();
console.log(user);
