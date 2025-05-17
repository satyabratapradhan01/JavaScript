const myNumber = [1, 2, 3];

const myTotal = myNumber.reduce(function (acc, currval) {
    console.log(`acc ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0)

console.log(myTotal)