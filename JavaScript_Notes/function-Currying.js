

// function currying
 //suppose we have a method_1 and that give multiply and we have a same method method_2 
 //insted of copying the same fun we bind it and pass the arguments and if we pass arguments in bind and method
 // it will take bind as first preiority


let method_1 = function(x ,y){
    console.log(x*y)
}

let method_2 = method_1.bind(this,2,5)   // 10
method_2()

let method_3 =method_1.bind(this,4,5)   // 20
method_3()


// here we can able to pass more arguments in 1 function and gets many output at a time individually  


//  By using closures 

let multiply = function(x){
     return function(y){
        console.log( x * y)
     }
}

let method = multiply(2)
method(3)                      // 6
