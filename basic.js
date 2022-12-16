 /* Types
 -string
 -number
 -boolean
 -null
 -undefined
 -symbol
 -bigint */

const { log } = require("console");

 // const dont change
 const a = 1

 // let can change
 let b = a
 b = 7
 console.log(a, b);

 // object, array, function

 const c =[3, 5]
 const d = c
 c[0]= 7
 console.log(c[0],d[0]);
 
// References 
// use const to avoid var!!!
 // bad 
 var count = 1
 if (true) {
     count += 1}
     console.log(count);

// good try to use const or let
let countLet = 2
if (true) {
    countLet += 2}
    console.log(countLet);

/* const countConst = 3
if (true) {
    countConst += 3}
    console.log(countConst); Error
  
    It will not working! Error will be thrown
    */


// let and const are block-scoped
// var is function-scoped
{
    let h = 6
    const k = 10
    var ö = 8
}
//console.log(h); Error
//console.log(k); Error
console.log(ö);

// Objects
// bad 
const badStyle = new Object()
// good
const goodStyle = {}

function getKey(p) {
    return `a key named ${p}`
}

// bad
const obj = {
    id: 5,
    name: "Henrick",
}
console.log(obj[getKey("enabled")] = true );
console.log(obj);

// good you can use it directly inside the object
const bObj = {
    id: 7, 
    name: "Ronaldo",
    [getKey(`enabled`)] : true,
}
console.log(bObj);

