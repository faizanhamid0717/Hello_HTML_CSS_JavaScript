

// call method 

// eg.

let name1 = {
    firstName :'Faizan',
    lastName : 'Hamid',
    printFullName : function(Hometown){       //method  and this reffers to the name1 obj
          console.log(this.firstName + " " + this.lastName +" "+ "from" +" "+ Hometown)
    }   
}
// call function
name1.printFullName()


// if we have another Object and similar to above one so it is not good to copy the method printFullName : fun{} so we use the call method 
// is used to borrow the function

let name2 = {
    firstName : "Mohammad",
    lastName : "Anas",
// insted of copying the fun use tha call that borrow the fun
//.call(name2) means this inside the fun refer to the name2 obj
}

// in call we can put arhuments saperate by using ,
name1.printFullName.call(name2,"Baramulla")

// ******************************************************

// apply Method 
// in apply method only 1 difference we use argumnets in an array
name1.printFullName.apply(name2,["Baramulla", "Kashmir"])



// Bind method 

// it simpley bind the method printFullName with the name2 obj and give the copy of that 

let bindCopy = printFullName.bind(name2,"Baramulla","Kashmir")
console.log(bindCopy) // it give the function printFullName
bindCopy() // when invoke it gives the the result of printFullName
