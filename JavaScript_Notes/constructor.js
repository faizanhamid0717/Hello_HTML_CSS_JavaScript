


// A factory function is a design pattern in JavaScript that allows you to create objects in a more flexible and organized way.
//  It's called a "factory" because it's like a factory that produces objects based on a set of instructions.

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        }
    };
}

const person1 = createPerson("John Doe", 30);
const person2 = createPerson("Jane Smith", 25);

person1.greet(); // Output: Hello, my name is John Doe and I'm 30 years old.
person2.greet(); // Output: Hello, my name is Jane Smith and I'm 25 years old.


// In this example, createPerson is a factory function. It takes name and age as parameters and returns an object with properties and methods.
//  Each time you call createPerson, it produces a new person object with the specified name and age.


// Constructor function
// A constructor function is a special function in JavaScript that is used to initialize new objects.
// in constructor fun the Name start with the capital

function Alian(name,age){
     this.Name = name,
     this.Age=age

     this.sayName=function(){
        console.log("constructor function")
     }
}


let alien_1=new Alian("Faizan",30)       // Alian {Name: 'Faizan', Age: 30}
let alien_2 = new Alian("Anas",4)       // Alian {Name: 'Anas', Age: 4}
console.log(alien_2)          
alien_1.sayName()                       // Alian {Name: 'Anas', Age: 4, sayName: ƒ}  and   constructor function

// new keyword creats the new onject and rerurn the object and using this.name puts the key in that obj as name and the value should be name

// ES6 syntex


class AlianES1{
    constructor(name,age){
        this.Name=name
        this.Age=age
    }

    sayName=function(){
        console.log("constructor function")
     }

}

const aslians = new AlianES1(" Fatimah" , 5)  //  Alianes {Name: ' Fatimah', Age: 5, sayName: ƒ}
console.log(aslians)


// so if i have another class and i want to use the properties in 2 class we use {extended class 1 from where i want to use}

class AlianES2 extends AlianES1{
     constructor(name,age,school){
        super(name,age)
        this.School=school
     }

     saySchool=function(){
        console.log("my school")
     }

}

const connect = new AlianES2("Hammad" , 5 , "Welkin")   //AlianES2 {Name: 'Hammad', Age: 5, School: 'Welkin', sayName: ƒ, saySchool: ƒ}
console.log("Connect",connect)



// difference between constructor fun and factory function

// Constructor Function:

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

const john = new Person("John Doe", 30);


// Constructor functions are used with the new keyword to create instances of objects.
// Return Value:

// They implicitly return the newly created object.
// this Binding:

// Inside a constructor function, this refers to the newly created object.
// Properties and Methods:

// Properties and methods are attached directly to this.
// Memory Consumption:

// Each instance has its own copy of methods, which can consume more memory if there are many instances.
// Prototype Chain:

// Constructor functions have a prototype property, allowing for inheritance.

// Factory Function:

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        }
    };
}

const johns = createPerson("John Doe", 30);


// Factory functions are regular functions that return objects. They do not use new.
// Return Value:

// They explicitly return an object.
// this Binding:

// They do not rely on this.
// Properties and Methods:

// Properties and methods are defined within the function and attached to the returned object.
// Memory Consumption:

// Methods are shared across all instances, potentially saving memory.
// Prototype Chain:

// Factory functions do not have a prototype property.