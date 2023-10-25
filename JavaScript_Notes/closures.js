
// function z(){
//     let d = 200
//     function a(){
//         let c = 29;
//           function b(){
//             console.log('c',c,"d",d)
//         }
//         b()
//     }
//     a()
// }
//  z()


//  function with its lexical scope form a closure 

// *********************************** VAR *******************
// function x(){
//     for(var i=0;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*3000)
//     }
// }
// x()

// when we use var here the loop runs and it will not wait foe 3 seconds we know
//  in case of var i gets updated the previouse i and we will get the 6 as output and
//  if we use let it has the block scope and it creates the new i at every time 

// The loop runs and i is assigned values from 0 to 5 in quick succession.
// The setTimeout functions are scheduled to run after a delay, but they all reference the same i.
// After the loop finishes, i is 6.
// When the setTimeout callbacks execute after their respective delays, they all print the value of i, which is now 6.
 
// now we need to save this i every time so that the issue gets resolved we use closure we create the
//  function and inside that we pass the every time then the setTimeout comes in action 

   function x(){
    for(var i=0;i<=5;i++){
        function close(i){
            setTimeout(()=>{console.log(i)},i * 1000)
           }
       close(i)
    }    
   }
x()

// ************************************************************ LET ***************
// function x(){
//     for(let i=0;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*3000)
//     }
// }
// x()

// The loop runs and a new i is created for each iteration, so each setTimeout captures a different i.
// When the setTimeout callbacks execute, they print the value of the i that they captured when they were created.
// Since each setTimeout captured a different i, you see the values 0, 1, 2, 3, 4, and 5 printed in order.
// In summary, using var in this context results in a single shared variable i for the entire function, which leads to the final value of i (6) being printed in all the setTimeout callbacks. Using let creates a new i for each iteration, so each setTimeout captures the correct value.





