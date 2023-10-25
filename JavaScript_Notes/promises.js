

// promises are used to operate async operation in javascript frst we we callback to do async operation but due to callback hell promises come

const cart = ["shoes",'shirt']

// by callback

// createOrder(cart,function(Id){
//     proceedPayment(Id)
// })


// withOut Callback


// const promise = createOrder(cart)
//    {data : undefined}
// it will rerturn a promise in the form of object and first it is undefined when finish executing get the data 
//   {data:orderDatails}
    // after getting data we do promises Object.then and put the call back function
//   promise.then(function(Id){
//     proceedPayment(Id)
// })

// when we get the data inside the ptomise then the call function gets execute once


const api = "https://fakestoreapi.com/products"
// const promise = createOrder(cart) similer
 const user = fetch(api)
.then(function(data){
    console.log(data)
})


// defnition
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// fetch(url) or createOrder(cart) here are the asyncoperation 



// conversion callback to promises
api.createOrder(function (){
    api.proceedPayment(function (){
        api.odrerSummary(function (){
            api.showWallet()
        })
    })
})

createOrder(cart)
.then(function(id){
  return proceedPayment(id)
})
.then(function(id){
   return odrerSummary(id)
})
.then(function(id){
   return showWallet(id)
})

// how to create the Promise

const promise = new Promise(function(resolve,reject){
       console.log("res,rej")
})

promise.then(function(resolve){
    console.log(resolve)
})


