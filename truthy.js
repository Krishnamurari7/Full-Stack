//truthy values
// "0", 'false', " ", [], {}, function(){}

const userEmail = "krishna@gmail.com"

if(userEmail){
    console.log("got user Email");
}else{
    console.log("dont have user email");
}

if (userEmail.length === 0){
    console.log("Array is empty");
}
console.log("empty")



// falsy value
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

const userEmail1 = ""

if(userEmail){
    console.log("got user Email");
}else{
    console.log("dont have user email");
}