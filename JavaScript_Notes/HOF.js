

// a function which takes another function as an argument or return a function from it ia call HOF


// A higher-order function in JavaScript is a function that either takes one or more functions as arguments,
//  or returns a function as its result.

function higherOrderFunction(callback) {
    // Do some processing
    let result = 10;
    // Call the callback function with the result
    return callback(result);
}


function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

let multiplyBy2 = createMultiplier(2);
let result = multiplyBy2(5); // result will be 10



// Map() Reduce() Filter()  are the HOF

// Map()
//   is that is used to transfer the array into the new array it give us the new array 
    // in this we are mapping inside the array as arr.map of its each element and convert them into double form
//    so if we want to double the elements
   const arr = [1,2,3,4,5]

   const output = arr.map(function double(ele){ 
    return ele * 2
}
)

console.log("map-output",output)

// other way to wright this is

function double(n){
    return n * 2 
}

const Output = arr.map(double)
console.log("map-output2",output)


// Binary

const Arr = [2,3,4,5]

function binary(x){
    return x.toString(2)
}

const res = Arr.map(binary)
console.log("binaryArr",res)


// Filter()  is used to filter the Element inside the Array

const Array = [2,3,4,5,6]

// find even number

function isEven(x){
    return x % 2 === 0
}

const out_put = Array.filter(isEven)
console.log("Even",out_put)


// OR

const resu =Array.filter((ele)=> ele % 2 === 0)
console.log("even-res",resu)



// Reduce()

// is used where we have to take the each element of an array and come up with the single value one output from it

const ARR = [ 1,2,3,4,5,6]

// we have to itrate each element and find the sum od smaller or lager number

function findSum(ARR){
    // console.log("ARR",ARR)
    let sum=0
    for(let i=0;i<ARR.length;i++){
        sum+=ARR[i]
    }
    return sum
   
} 
console.log(findSum(ARR))

// Now By reduce

// here acc means sum ,ele means each ele of array ,0 means let sum = 0
const ans = ARR.reduce(function(acc,ele){
    acc = acc + ele
    return acc
}, 0)

console.log("ans",ans)


// find Max

function findMax(){
    let max = -Infinity

    for(let i=0;i<ARR.length;i++){
          if (ARR[i] > max){
            max = ARR[i]
          }
    }
return max
}
console.log(findMax(ARR))


const answer = ARR.reduce(function(acc,ele){
 ele > acc
 acc = ele
 return acc
},-Infinity)

console.log("answer",answer)