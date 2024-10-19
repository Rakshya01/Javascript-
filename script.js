//  console.log("hello world")
// alert("hello world");

// document.write("<h1>hello world</h1>")


//static numbers

// let a = 5;
// let b= 6;
// var c= a+b;
// console.log("The sum of "+a+" and "+b+" is: " +c);
// //the sum of 5 and 6 is 11.


//dynamic

// let a= prompt("Please enter first number", "");
// let b= prompt("Please enter second number", "");

// var c = parseInt(a)+parseInt(b);
// console.log("The sum of "+a+" and "+b+" is: " +c);


//square root

// var a = prompt("Please enter a number", "");
// var b = Math.sqrt(a);
// console.log(b);

//to find area of right angled triangle
// var base = prompt("Please enter the base value","");
// var height = prompt("Please enter the height value", "");
// var area = (base*height)/2;
// console.log(area);


//area of regular triangle (a b and a are 3 sides of triangle)
// var a = 10;
// var b = 3;
// var c = 12;
// var s =  (a+b+c)/2;
// var temp = s*(s-a)*(s-b)*(s-c);
// var area = Math.sqrt(temp);
// console.log(area);

//swapping 2 numbers
//using temp

// var a=4;
// var b = 3;
// console.log(`The value of a:${a}, the value of b:${b}`);
// var temp ;
// temp = a;
// a = b;
// b=temp;
// console.log(`the value of a: ${a}, the value of b:${b}`)

//without using temp
// var a= parseInt(prompt("Please enter first number",""));
// var b = parseInt(prompt("Please enter second number",""));
// console.log(`The value of a:${a}, the value of b: ${b}`);

//  var a = a+b;
//  var b = a-b;
//  var a = a-b;
// console.log(`after swapping \n the value of a:${a}, the value of b:${b}`);

//convert kms to miles using js function
function convert(){
    var kms = document.getElementById('data').value;
    const factor = 0.621371;
    var miles = kms*factor;
   //document.getElementById('res').innerText = `${miles} miles`;
   document.getElementById('res').innerText = miles + 'Miles';
}