//singleton

//object literals
// Object.create

const mySym = Symbol("key1")


const JSuser = {
    name: "Deep",
    "full name" : "Deepali Dashore",
    [mySym]: "mykey1",
    age: 22,
    location: "Indore",
    email: "deepali@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JSuser.email);

// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser["mySym"]);
// console.log(typeof mySym);


JSuser.email = "deepali@chatgpt.com"
// Object.freeze(JSuser)
JSuser.email = "deepali@microsoft.com"
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS User");
}

// console.log(JSuser.greeting());

JSuser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());





