


function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("L");
    console.log("I");

}

// sayMyName()

// function addTwoNumbers(num1, num2){    //parameters
//     console.log(num1  + num2); 
// }

function addTwoNumbers(num1, num2){    //parameters
    // let result = num1 + num2 
    // return result 

    return num1 + num2
}

const result = addTwoNumbers(34, 67)        //arguments
// console.log("Result: ",result);


function loginUserMessage(username = "sam"){
    if(!username){                            //undefined and empty value is considered as false
        console.log("please enter a username");
        return 

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Deepali"))
// console.log(loginUserMessage("deepali"))


function calculateCartPrice(val1, val2, ...num1){
    return num1

}

// console.log(calculateCartPrice(200,400,500, 988,56));


// const user = {
//     username: "deepali",
//     price: 199
// }

function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]

}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));


