// single tone
// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "1234abcd";
tinderUser.name = "Sammy";
tinderUser.iSLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sonu@gmail.com",
    fullname: {
        firstname: "satyabrata",
        lastname: "pradhan"
    }
}

// console.log(regularUser.fullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = {...obj1, ...obj2, ...obj4}

console.log(obj3);

const users = [
    {
        id: 1, 
        email: "sonu@gmail.com"
    },
]

