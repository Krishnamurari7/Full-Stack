const balance = 1000
if(balance < 500){
    console.log("less than");
}else if( balance < 750){
    console.log("less than 750");
}else if( balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}


const userLoggedIn = true
const debitcard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if(userLoggedIn && debitcard && 2 === 3){
    console.log("allow buy course");
}

if(userLoggedInFromGoogle || userLoggedInFromEmail ){
    console.log("user  logged in");
}