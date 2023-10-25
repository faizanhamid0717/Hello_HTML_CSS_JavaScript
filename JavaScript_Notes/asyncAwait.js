

// ASYNC AWAIT
// function which has async in front are async function


// async fun always return a promise if we return the simple from this function it automatically wrap value in to a promise and return them
// check in browser

async function getData(){
    return "Hello World"
 }
 
 console.log(getData())   // Promise {<fulfilled>: 'Hello World'}
//  or
const data = getData()
console.log(data)  // Promise {<fulfilled>: 'Hello World'}


data.then(function(data){
    console.log(data)       // Hello World
})



// return promise From this async function

const promise = new Promise(function(resolve,reject){
    resolve("Promise gets resolved")
})


async function getPromise(){
    return promise
}

const Data = getPromise()
console.log("Data",Data)       //Data  Promise {<pending>}

Data.then((data)=> console.log("Promise :-",data))    // Promise :- Promise gets resolved



// compare how we handel the with out async await and with async await

// with out async await

const Promis = new Promise(function(resolve,reject){
    resolve("Promise gets resolved")
})

function getPr(){
    Promis.then((data)=>console.log("without async :-",data))    // without async :- Promise gets resolved
}
getPr()


// with async await
// awiat is a key word and only n used in async function 
//    we have to use await in front of promise which have to b resolved and we took that data inside the variable result
const promis = new Promise(function(resolve,reject){
    resolve("Promise gets resolved")
})

 async function handelpromise(){
     const result = await promis
     console.log("result :-",result)    // result :- Promise gets resolved
}

handelpromise()



// NOTE  if we increase the time of promise using set time out in normal function it will not wait blow code get 
// executed then promise gets executed   eg.

const P = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise gets resolved")
    },5000)
  
})

function getProm(){
    P.then((data)=>console.log("setTimeout :-",data))    // without async :- Promise gets resolved
    console.log("Javascript")
}
getProm()

// NOTE  if we increase the time of promise using set time out in async function it will wait promise gets executed then blow code get 
// executed   eg.

const pr = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise gets resolved")
    },5000)
    
})

 async function handelpr(){
    console.log("hello world")  // gets execute fast
     const result = await promis  // 1 // Here it waits until the promise gets resolved then the blow code gets executed
     console.log("result AFTER 5 SEC :-",result)    // result :- Promise gets resolved
     console.log("async :- Javascript")

// if we have 2 awaits in the program bhot the 2 gets executed at the same time

     const results = await promis   // 2 // Here it waits until the promise gets resolved then the blow code gets executed
     console.log("result AFTER 5 SEC :-",results)
}

handelpr()



// NOTE *********************************************

const P1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise 1 gets resolved")
    },5000)
  
})

const P2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise 2 gets resolved")
    },10000)
  
})


async function awaitsExecute(){

    console.log("hello World await")

    const pms1 = await P1
    console.log( "p1",pms1)

    const pms2 = await P2
    console.log( "p1",pms2)
}

awaitsExecute()

// call stack

// we know that call stack is empty when this function awaitExecute() goes in call stack and the console gets executed then it 
// see await and this fun awaitExecute()  gets suspended from call satck until the p1 gets resolved in 5 sec the fun again comes in callstack
// and execute the console p1 then reach to another pms2 again see await and see weather is this execute or not and again suspend and same process as above


// Real word use of promise

const api = "https://fakestoreapi.com/products"

async function fetchData(){
    try {
        const data = await fetch(api)  // here fetch() is a promise and it give responce object has an body which is an redable streme 
        console.log("responce",data)
       const result = await data.json()// here we try to convert responce in to json by res.json() which is also a promise and gets resolved and gets data in result
   
       console.log("fakeStoreData",result)
   
       // with out async  fetch(api).then((res)=>res.json).then((data)=>console.log(data))
    } catch (error) {
        console.log(error)
    }
   
}

fetchData()


// Interview

// async is key word withe the function and await is only used in async function
// we wright code in async format but js engime treat the code in promise.then().catch only