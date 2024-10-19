//how data is stored in memory and how is it accessed depemding on these data
//are categorized into 2 types : primitive and non-primitive

//premitive:are called by value
//7 types :string, number, boolean, null, undefined, symbol, bigInt

// we donot define language in js
//it is a dynamically typed language

//reference or non premitive : memory ma directly yesko refernce ligera janxa

//array, objects, functions

// const score = 200;
// const scoreValue = 3.43;
// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;

//symbol declare
const id = Symbol("34");
const anotherId = Symbol("34");

console.log(id === anotherId);

const bigNumber = 457639847648756839457n;

const heros = ["shaktiman", "naagraj", "doga"]; //array and objects are inside curly braces written in key value pair
let myObj = {
  name: "rakshya",
  age: 33,
  address: "bagbazar",
};

const myfunction = function () {
  console.log("Hello world");
};

//non primitive ko return type function aauxa and function or smthg else ko object function hunxa return type

//////////////////////////////////////////

//2 types of memory
//stack(primitive) and heap(non-primitive)
const getLogged = "Rakshya"
console.log(getLogged);



let myYoutubename = "Rakshyas blog"
let anotherName = myYoutubename
anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myYoutubename);


let userOne={
  email: "user@gmail.com",
  upi: "user@byl"
}

let userTwo = userOne

userTwo.email = "rakshya@google.com"
console.log(userOne.email);
console.log(userTwo.email);