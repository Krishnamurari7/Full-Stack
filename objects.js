// singleton


// object litrals
const mysym = Symbol("key")
const jsUser = {
    name:"krishna",
    [mysym]: "isu",
    age: 21,
    location:"noida",
    email:"ayyaaankumar@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["monday","tuesday"]
}
console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser[mysym]);
console.log( typeof jsUser[mysym]);

jsUser.email = "isuayaan@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "isuayaan@microsoft.com"
console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("hello krishna");    
}
console.log(jsUser.greeting());

