const discripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(discripter);

const chai = {
    name: "satya",
    price: 150,
    isAveilable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of Object.entries(chai)){
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
}
