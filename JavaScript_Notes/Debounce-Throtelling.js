

// Debounce 
 // is used in search bar when we search some thing and we get the suggessions in the search bar and on each alfabit the network is getting made 
 // so to remove that we use debounce 


 const getData = function(){
    // here on each alphabit console is getting called means network call are made 
    //  it will gtes call when user stop writing 
    console.log("getting the data")
 }

 function debounce(fn , delay){
    let toClearTimer;
      return function(){
        // let context = this,
        // arg = arguments       
        clearTimeout(toClearTimer)
        toClearTimer= setTimeout(()=>{
            fn()
            // fn.apply(context,arg)
        },delay)

        
      }
 }



 const betterFun = debounce(getData,3000)
 // callthis betterFun in inputbox  when we wright some thid this fun gets call and it retun a function and that contain setTimeout
 //  after delay sec the getData fun gets call and we clear the interval



//  Throtelling
//limits the number of times a function can be called within a specified time period.
// It doesn't matter how many times the event is triggered;

function logMessage() {
    console.log('Message logged!');
  }
  

  function throttle(func, delay) {
    let canRun = true;
    
    return function() {
      if (canRun) {
        func.apply(this, arguments);
        canRun = false;
        setTimeout(() => {
          canRun = true;
        }, delay);
      }
    };
  }

  
  const throttledLogger = throttle(logMessage, 1000);
  
  throttledLogger(); // Message logged!
  throttledLogger(); // Won't execute
  