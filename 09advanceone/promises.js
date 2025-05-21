const promiseOne = new Promise(function(resolve, rejecte){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
});

promiseOne.then(function(){
    console.log('promise consumed')
})

new Promise(function(resolve, rejecte){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 2000)
},).then(function(){
    console.log('Async 2 reolved');
})