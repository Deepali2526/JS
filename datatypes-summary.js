// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3    //type of scoreValue is number

const isLoggedIn = false    //Boolean
const outsideTemp = null     //object

let userEmail;

const id = Symbol('123')
console.log(typeof id)             //symbol

const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 348489847663279n
console.log(typeof bigNumber)             //bigint



//Reference or Non-primitive

//Array, Objects, Functions


const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Deepali",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction)  //function