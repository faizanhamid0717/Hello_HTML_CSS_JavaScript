let x = 5;
if (true) {
  let x = 10;
  console.log(x); // Output?
}
console.log(x); // Output?


var y = 15;
if (true) {
  var y = 20;
  console.log(y); // Output?
}
console.log(y); // Output?


const z = 25;
if (true) {
  const z = 30;
  console.log(z); // Output?
}
console.log(z); // Output?


let a = 5;
if (true) {
  let a = 10;
  console.log(a); // Output?
}
console.log(a); // Output?


// for (const i = 0; i < 3; i++) {
//     console.log(i);
//   }

  function exampleWithLet() {
    let x = 5;
    if (true) {
      let x = 10;
      console.log(x); // Output?
    }
    console.log(x); // Output?
  }
  
  exampleWithLet();
  

  const person = {
    name: "John",
    age: 30
  };
  
  person.age = 31;
  person.city = "New York";
  
  console.log(person); // Output?

  
  for (let i = 0; i < 3; i++) {
    console.log(i); // Output?
  }
  