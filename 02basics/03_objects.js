// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "satya",
    "full name": "satyabrata pradhan",
    [mySym]: "mykey1",
    age: 21,
    location: "Jaipur",
    email: "satyabratapradhann@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "satya@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "sonu@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


