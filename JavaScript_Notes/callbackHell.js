

// when a one callback gose into the another callback when they depende each other call callback hell

// eg. in ecommerse website we need to order the product and tyen proceed the payment from to order summery 
// they depend each other one finish then other start

const cart = ["shoes",'shirt']
// when the order compleet then proceed payment starts so we put this in callback so thet it gets execute after this or later
// and so on it becames the chain that causes the issue this structure is call pyramid of doom

api.createOrder(function (){
    api.proceedPayment(function (){
        api.odrerSummary(function (){
            api.showWallet()
        })
    })
})


// invansion of control 
//   we loose control of our code due to these callbacks


