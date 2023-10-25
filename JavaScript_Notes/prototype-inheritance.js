

// prototype  



let arr = [ 23, 24,45]
// if we do arr. in console we get all the hodden properties and methods of the array which they perform
// same as Object and functions 


// arr.__proto__. commant to check the prottype obj in console
//when we create any method as Array ,Object the javascript attach the Object to it known as prototype and that is why we can
//access these properties using . dot operator

// ProtoType Chain
// if we creat an Array it has its prototype whicj is arr.prototype and arr.prototype also has the prototype which is Object.prototype
// obj.prototypr also has the prototype that is null  same as function

// this means that EVERY THING IN JAVASCRIPT IS AN OBJECT KNOWN BY PROTOTYPE


// eg.

let teacher = {
    name : 'abdul',
    age: 25,
    city:"banglore",
    sayTeacher:function(){
        console.log(" Hi! my name is"+" "+ this .name)
    }
}
// teacher.sayTeacher()

let student = {
    name : "Anas",
}

// by prototype we can able to access the properties and methode of teach from the student object
Object.setPrototypeOf(student,teacher)

student.age