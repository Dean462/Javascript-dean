const name = "Dean"
const repoCount = 2

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('dean-devil-king')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 7)
// console.log(newString);

const anotherString = gameName.slice(-5, 7)
// console.log(anotherString);

const newStringOne = "   dean   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://google.com/google%20space"

console.log(url.replace('%20', '-'));

console.log(url.includes('com'));

console.log(gameName.split('e'));