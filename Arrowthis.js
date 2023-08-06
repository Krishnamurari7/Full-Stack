const user = {
    username : "krishna",
    price : 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomemessage()

user .username = "isu"
user.welcomemessage()

console.log(this);

// function one(){
//     let username = "krishna"
//     console.log(this.username);
// }

const one = () => {
    let username = "krishna"
    console.log(this.username);
}
one()


// const addsum = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addsum(3, 4));

const addsum = (num1, num2) =>  num1 + num2

console.log(addsum(3, 4));
