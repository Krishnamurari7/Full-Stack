const home = new Object()
// const home = {}
home.id = "123abc"
home.name = "krishna"
home.isLoggedIn = false
// console.log(home);
const regularUser = {
    fullName : {
        userFullname:{
            firstname: "krishna",
            lastname: "murari"
        }
    }
}
console.log(regularUser.fullName.userFullname);
console.log(home);

console.log(Object.keys(home));
console.log(Object.values(home));
console.log(Object.entries(home));

console.log(home.hasOwnProperty('name'));
