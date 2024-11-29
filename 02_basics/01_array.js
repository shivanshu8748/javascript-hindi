// array

const myArr =[0, 1, 2, 3, 4, 5]
const myHeros =["shaktiman","naagraj"]

const myArr2 =new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Array methods

myArr.push(6)
myArr.pop()


myArr.unshift(0)
myArr.shift()

console.log(myArr.includes(9))
const newArr = myArr.join()

console.log(typeof newArr)
console.log(myArr)

//slice, splice

slice :- range not include
splice:- range include 