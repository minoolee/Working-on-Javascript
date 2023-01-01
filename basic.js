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

// Method shorthand 
// bad 
const atom = {
    value: 1,
    addValue: function(value) {
        return atom.value + value;
    }
}
console.log(atom.addValue(7));

// good without function
const atomExtra = {
    value: 5,
    addValuueExtra(value){
        return atomExtra.value + value;
    }
}
console.log(atomExtra.addValuueExtra(7));

const lukeSkywalker = "Luke Skywalker";

// bad 
const shortObj = {
    lukeSkywalker: lukeSkywalker,
}
console.log(shortObj.lukeSkywalker);

// good just ones 
const shortObjGood = {
    lukeSkywalker,
}
console.log(shortObjGood.lukeSkywalker);

const CR = "Cristiano Ronaldo"
const MU = " Manchester United"

// bad 
const player = {
    age: 36,
    position: "attack",
    CR,
    games: 56,
    MU,
}

// good  Group your shorthand properties at the beginning of your object declaration
const goodPlayer = {
    CR,
    MU,
    age: 36,
    position: "attack",
    games: 56,
}

// Only quote properties that are invalid identifiers
const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
}
// good only important
const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
}
class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}
let date = new Date()
let year = date.getFullYear();
 let myCar = new Car("Ford", 2014)
 console.log(myCar.age(year));

 // Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf

 //bad 
 //console.log(goodPlayer.hasOwnProperty(key)); // not working
 // I need it to understand!!!
 // bad
//console.log(object.hasOwnProperty(key));

// good
//console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
//const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
//console.log(has.call(object, key));
/* or */
//import has from 'has'; // https://www.npmjs.com/package/has
//console.log(has(object, key));
/* or */
//console.log(Object.hasOwn(object, key)); // https://www.npmjs.com/package/object.hasown

const pro = goodPlayer["age"]
console.log(pro);
let text = ""
for (let i = 0; i < 6; i++) {


}
console.log(text);

// Assign copy object.  Use the object rest parameter syntax to get a new object with certain properties omitted. 

// bad 
const original = {a:1, b:2}
const copy = Object.assign({}, original, {c:3})
console.log(copy);

// good {... name, new value}
const bOriginal = {a: 1, b: 2}
const bCopy = {... bOriginal, c: 3}
console.log(bCopy);

// Arrays
// bad 
const bArray = new Array()
//good
const gArray = []

// Array#push
const someStrack = []
// bad
someStrack[someStrack.length] = 'abracadabra';
console.log(someStrack);
// good
someStrack.push('Harry Love')
console.log(someStrack);
// Use array spreads ... to copy arrays
// bad 
const len = someStrack.length
const itemsCopy = []
let i;

for (i = 0 ; i < len; i +=1) {
    itemsCopy[i] = someStrack[i]
    console.log('it' ,itemsCopy);
}
// good
const assignArray = [...someStrack]
console.log(assignArray);
const tryNew  = Array.from(someStrack)
console.log("try" , tryNew);

// Use Array.from for converting an array-like object to an array
const arrLike = {0:"fer", 1:"sec", 2:"thi", length:3}
// bad
const arr = Array.prototype.slice.call(arrLike)
console.log(arr);
// good
const arrBe = Array.from(arrLike)
console.log(arrBe);

// Array callback return
// good
[1, 2, 3].map((x) => {
    const y = x + 1
    return x * y
    
})
function getFullNameUser(user) {
const {firstName, lastName} = user
return `${firstName}${lastNames}`
}
function getFullName({firstName, lastName}) {
return `${firstName} ${lastName}`

}


const arrRei = [0, 1, 2, 3]
/* const first = arrRei[0]
const second = arrRei[1] */
const [firstNummer, secondNummer] = arrRei
console.log("it",arrRei);
console.log(firstNummer);
console.log(secondNummer);

// Use object destructuring for multiple return values, not array destructuring.
// bad
function processInput(input){
    return [left, right, top, buttom]
}
const [left, top] = processInput(54,67)
console.log(left,top);
// good
function processInputObj(input){
    return{left, right, top, buttom}
}
const {right,buttom} = processInputObj(input)
