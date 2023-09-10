const user = {
    username : "deepali",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
    
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);   it will print {} empty object

// function chai(){
//     let username= "deepali"
//     console.log(this.username); //throw an error
// }

// chai()

// const chai = function(){
//     let username= "deepali"
//    console.log(this.username);         //throw an error
// }


const chai = () => {                            //Same above function using arrow function
    let username= "deepali"
   console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "deepali"})


console.log(addTwo(3, 4))


// const myArray = [ 2, 4, 7, 1, 8]

// myArray.forEach(() => ())