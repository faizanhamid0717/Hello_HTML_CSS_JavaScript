
let add = function(x, y) {
    return x + y;
};


// An anonymous function, also known as a function expression, is a function that is defined without a name.
//  Instead, it is typically assigned to a variable or used as an argument in a function call.

// *********************

// function statement or function decleration

function a(){
    console.log("a called")
}
a()

// **********************

// function expression

var z = function (){
    console.log("z called")
}

z()


// difference

// they have an difference in hoisting if we call both the function at the to fun statement workd but fun expression
// through the error type-error z is not a function

// **********************

// Anonyamous Functions
//   are with out name and are used as values 
var x = function (){
   
}
x()

// **********************

// Named Function Expression
// function withe a name 
var z = function xyz(){
    console.log("z called")
}

z()
// xyz()   this will through the error

// **********************

// Difference betweeen parameter and arguments

function a(parameter){

}
a("argument")

// **********************

// first class function

function a(params){
    console.log(params)
}

a(function(){

})


function z(params){
    console.log(params)
}

function xyz(){
   console.log('i am first class function')
}
z(xyz())


function b(){
    return function(){
        console.log('i am returning')
    }
}

console.log(b())
// the ability to use function as values and can be pass as arguments to another function and return the function as well


