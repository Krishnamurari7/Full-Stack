function myname() {
  console.log("k");
  console.log("r");
  console.log("i");
  console.log("s");
  console.log("h");
  console.log("n");
  console.log("a");
}

myname()

function addtn(num1, num2) {
    // let result =num1 + num2
    console.log("krishna");
    // return result
    return num1 + num2
}
const result  = addtn(3, 5)
console.log("Result: ", result);

function loginuser(username) {
    // if(username === undefined)
    if(!username){
        console.log("please enter a user name");
    }
    return `${username} just logged in`
}
console.log(loginuser("krishna"));
console.log(loginuser());

// function calculateprice(num1) {
// function calculateprice(...num1) {
function calculateprice(val1, val2, ...num1) {
    return num1
}
console.log(calculateprice(200, 300, 500, 432));

