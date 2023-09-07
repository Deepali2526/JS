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



//++++++++++++++++++++++++++++++++++++++++++++++++++++


/*There are 2 types of memory stack and heap*/

//Stack (Primitive), Heap(Non-Primitive)

console.log("****************************")

let myYoutubeName = "deepalidotcom"

let anothername = myYoutubeName
anothername = "payaldotcom"

console.log(myYoutubeName)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "deepali@google.com"

console.log(userOne.email)
console.log(userTwo.email)
