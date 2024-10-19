//array: collection of multiple items under a single variable
//they are resizeable mixed pani hunxa

const myArray = [0,1,2,3,4,5]
// console.log(myArray[1]);

//shallow copy :share same reference 

const myHeros = ['rakshya', 'ribas' ]
const Heros = new Array(1,2,3)


//array methods

myArray.push(9)
myArray.push(8)
myArray.pop() //last item lai pop 

myArray.unshift(10)
myArray.shift()  //agadi ko lai pop gardinxa

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));

const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);


//slice splice
console.log("A", myArray);

const myn1 = myArray.slice(1, 3)  //includes 1  2
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3) //includes edge also i.e 3
console.log("C", myArray);
console.log(myn2);






