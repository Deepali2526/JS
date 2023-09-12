//for of

// [", ", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

map.set('IN', "India")     //map does not allow duplicate values

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value); 
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key, value] of myObject) {
//         console.log(key, ':-', value);              //error object is not iterable
// }

// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")

// map.set('IN', "India") 

// for (const key in map) {
//     console.log(key);       //error object is not iterable
    
// }
const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    console.log(programming[key]);
    
}
