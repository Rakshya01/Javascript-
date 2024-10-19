//declaring objects: literal and constructor jasari
//singleton: constructor batw singleton banxa
//Object.create


//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Rakshya",
    "full name" : "Rakshya Kunwar",
    [mySym ]: "mykey",
    address: "Gorkha",
    age: 21,
    email: "rakshya20@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//console.log(JsUser.age);
//console.log(JsUser.email);

//console.log(JsUser["full name"]);

//console.log(JsUser["isLoggedIn"]);
//console.log(JsUser[mySym]);

JsUser.email = "rakshyachange@email.com";
//Object.freeze(JsUser)
JsUser.email="rakshyamicrosoft.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


