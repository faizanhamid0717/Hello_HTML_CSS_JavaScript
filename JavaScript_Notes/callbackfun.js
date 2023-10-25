

// Call Back function

// when we pass function i to another function in an argument that passing function means function inside x() is called callback function
// we pass this to x when x want to call this function it is depends to x function it gets call later 

function z(y){

}
z(function y(){

})

// eg
// it gets call later that is why we are providing a callback function setTimeout

// here setTimeout takes time to execute so the blow code gets executed and later on the callback function of settimeout gets executed

setTimeout(function(){
     console.log('i am call back function')
},5000)

function x(y){
   console.log('i am x')
   y()
}

x(function y(){
    console.log('i am y')
})

// FROM THIS CALL BACK FUNCTIONS WE A ABLE TO ACHIEVE THE ASYNCHRONES OPERATIONS OTHER WHERE NOT

// this function is callback function  in EVENT LISTNER  
// IF I NEED TO COUNT THE CLICK 
// but the variable is not safe present in global scope to safe this we use closure simple wrap this inside the
//  function and outside it is not accesibles


function closur(){
    let count = 0
document.getElementById('clickme').addEventListener('click',function callback(){
       console.log('i am clicked ' ,count++)
})
}
closur()

// this callback function makes the closure with the outer scope



// GARBAGE COLLECTIONS AND removeEventListener

// when we will not run the code the call stack is empty but takes the memory we see in elements ,eventlistner ,the eventlistner is heavy
// so when we remove the addEventListener the value or variables gose into garbage collections
