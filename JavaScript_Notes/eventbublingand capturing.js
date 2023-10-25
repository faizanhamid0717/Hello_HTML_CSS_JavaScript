

// Event bubbling and event capturing
// if we have there dive these are nested 
//   div1  //onClickgrandparent()
//   div2  // onClickparent()
//   div3 // coClickchild()
// event bubbling  :- when we click on child the squance of getiing executed is from child to grand parent {inner to outer}
// event capturing  :- when on click on child the squance of getiing executed is from grand  parent to child  {outer to inner}
document.getElementById("clickme").addEventListener("click",function(){
   console.log("hello world")
})

document.querySelector("#grandparent").addEventListener("click",function(){
    console.log("grant-parent")
})

document.querySelector("#parent").addEventListener("click",function(){
    console.log("parent")
})

document.querySelector("#child").addEventListener("click",function(event){
    event.stopImmediatePropagation()
    console.log("child")
})

// Event Bubbling  :-if i click on child it bubbling out we get child,parent,grandparent
//Event capturing  : if i click on child we get grandparent,parent,child  by default it is bubbling and if i put true at capture it gets capturing

document.querySelector("#grandparent").addEventListener("click",function(){
    // console.log("grant-parent-cap")
},true)

document.querySelector("#parent").addEventListener("click",function(){
    // console.log("parent-cap")
},true)

document.querySelector("#child").addEventListener("click",function(){
    // console.log("child-cap")
}, true)

// Stop propagation
// if i click on child and i want only child get executed so is do event.stopPropagation() in case of bubbling because ig got parent and grandparent also



// event.preventDefault()
// event.preventDefault() is a method in JavaScript that's used to stop the default behavior of an element from occurring.
//  It's commonly used with events like form submissions and anchor (<a>) clicks to prevent the page from refreshing
//   or navigating to a new URL.

// Let's say you have a form on a webpage. Normally, when you click the submit button, the form would send the 
// data to a server and the page would refresh.

{/* <form>
  <!-- form fields go here -->
  <button type="submit">Submit</button>
</form>

Using event.preventDefault(): */}

// document.querySelector('form').addEventListener('submit', function(event) {
//   event.preventDefault(); // This prevents the default behavior of form submission
  // Now, you can do your own custom processing with the form data
// });

// In this example, event.preventDefault() is called inside the event handler for form submission.
//  This prevents the default behavior (submitting the form and refreshing the page) from happening.