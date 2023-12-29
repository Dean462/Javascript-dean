//  array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["dean ambros", "roman reigns"]

const mArr2 = new Array(3, 4, 6, 1)
// console.log(myArr[3]);

//  Array methods

// myArr.push(7)
// myArr.push(9)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

//  Slice, Splice

console.log("A =", myArr);

const myn1 = myArr.slice(1, 4)

console.log("A =", myn1);
console.log("B =", myArr);

const myn2 = myArr.splice(1, 4)
console.log("C = ", myArr);
console.log("B =", myn2);

console.log("dean devil")

// it is done