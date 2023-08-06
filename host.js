let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("inner : ", a);
    console.log("inner : ", b);
}
console.log(a);

function one(){
    const username = "krishna"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()
if(true){
    const username = "krishna"
    if(username === "krishna"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addone(5))
function addone(num){
    return num + 1
}



// console.log(addtwo(5))
const addtwo = function(num){ //not declare variable in function
    return num+2
}

