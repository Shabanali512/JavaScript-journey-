const PromiseOne = new Promise(function (resolve , reject){
    // do an async task 
    // DB calls , cryptography , network 

    setTimeout(function(){

        console.log('Async task is complete')
        resolve()
    }, 1000)
});

PromiseOne.then(function(){

    console.log('Promise consumed')
});

// without storing in variable 

new Promise(function(resolve , reject){

    setTimeout(function(){

        console.log('Task 2 run')
        resolve()
    }, 1000)

}).then(function(){

    console.log('Task 2 of promise is consumed')

});

const PromisThree = new Promise(function(resolve , reject){

    setTimeout(function(){

        resolve({username : "Shaban" , email : "Shaban@gamil.com"})

    }, 1000)

})

PromisThree.then(function(user){

    console.log(user);
    

});

const PromiseFour = new Promise(function(resolve , reject){

    setTimeout(function(){
        let error = false 
        if(!error){
            resolve({username : "Shaban" , password : "321"})
        } else {

            reject('ERROR : Something went wrong ')
        }
    }, 1000)
});

PromiseFour.then(function(user){

    console.log(user);
    return user.username
}).then(function(username){

    console.log(username);  

}).catch(function(error){

    console.log(error)
}).finally(function(){

    console.log("the promise is either resolved or rejected")
})


const PromiseFive = new Promise(function(resolve , reject){


    setTimeout(function(){

        let error = true 
        if (!error){

            resolve({language : "JavaScript" , password : "321"})

        }else {

            reject('ERROR : Something went wrong ')
        }
    }, 1000)

});

async function  consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response)
    } catch (error) {

        console.log(error);  
        
    }
}

consumePromiseFive()

// async function getAllusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log("E :" , error)
        
//     }
// }

// getAllusers()  


fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){

    console.log(data)

}).catch(function(error){

    console.log(error)

})