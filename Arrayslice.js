const myArr = [0, 1, 2, 3, 4, 5]
console.log("A",myArr);

const myn1 = myArr.slice(1,4)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1, 4)
console.log(myn2);
console.log("c", myArr);