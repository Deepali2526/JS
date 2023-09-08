const name = "deepali"
const repoCount = 50

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new  String('deepali-dd-com')

console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('p'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(0,7)
console.log(anotherString)

const newStringOne = "     Deepali          "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://deepali.com/deepali%20dashore"

console.log(url.replace('%20', '-'))

console.log(url.includes('dashore'))
console.log(url.includes('dase'))

console.log(gameName.split('-'))

