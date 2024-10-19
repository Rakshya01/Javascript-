const name = "rakshya"
const repoCount = 50

// console.log(name + repoCount +  "value");

//string interpolation

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);



const gameName = new String('rakshya-ku-nw-ar')
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(2,4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);


const newStringOne = "   rakshya kunwar     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://rakshya.com/rakshya%20kunwar"

console.log(url.replace('%20', '-'));

console.log(url.includes('rakshya'));
console.log(url.includes('hello'));

//array ma convert 
console.log(gameName.split('-'));

console.log(gameName.small('rak'));

