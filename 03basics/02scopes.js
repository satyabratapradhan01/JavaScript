
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Result: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


// part:-2

function one(){
    const userName = "satya";

    function two(){
        const role = "webDevloper"
        console.log(userName);
    }
    // console.log(role);
    // two()
}

// one()


if (true) {
    const userName = "satyaaa";
    if (userName === "satyaaa"){
        const role = "webDevloper";
        console.log(userName + " " + role);
    }
    // console.log(role);
}

// console.log(userName);



console.log(addOne(5));

function addOne(num){
    return num + 1;
}


console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}

// console.log(addTwo(5));
