const userEmail = "s@satya.ai"

// if (userEmail) {
//     console.log("Got User Email");
// } else {
//     console.log("Don't have user email");
// }

/*
falsy values
false, 0, -0, BigInt 0n, "", null, nudefined, NaN

truthy values
"0", "false", " ", [] Empty Array, {} empty object, function(){}
*/ 

const emptyObj = {};

// if(Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1  = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");


