//  Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('23')
const anotherId = Symbol('23')

// console.log(id === anotherId);

// const bigNumber = 654337654535435675435n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["saktiman", "naagraj", "doga"]
let myObj = {
    name: "dean",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}


// console.log(typeof bigNumber);
// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3 
 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "DeanDevil"

let anothername = myYoutubename

anothername = "deandean"


console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "dean@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "done@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
 
