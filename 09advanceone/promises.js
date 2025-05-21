// const promiseOne = new Promise(function(resolve, rejecte){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// });

// promiseOne.then(function(){
//     console.log('promise consumed')
// })

// new Promise(function(resolve, rejecte){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     }, 2000)
// }).then(function(){
//     console.log('Async 2 reolved');
// })

// const promiseThree = new Promise(function(resolve, rejecte){
//     setTimeout(function(){
//         resolve({username: 'chai', email: 'chai@example.com'})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(reolved, rejected){
//     setTimeout(function(){
//         let err = false;
//         if(err){
//             reolved({username: "satya...", password: "1234"});
//         }else{
//             rejected('ERROR: Somting went wrong');
//         }
//     }, 1000)
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username)
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('The promise is either resolved and rejected')
// })

const promisFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
    if(error){
        resolve({userName: 'satya...', password: '1234'});
    }else{
        reject('ERROR: Js went wrong')
    }
    }, 1000)
})

async function consumepromisesfive(){
    try {
        const response = await promisFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromisesfive()