const my_heroes = ["krishna","murari","isu","manish"]
const heroes = ["superman","saktiman","lord"]
my_heroes.push(heroes)
console.log(my_heroes);
console.log(my_heroes[4][1]);

const allHeroes = my_heroes.concat(heroes)
console.log(allHeroes);

const all_new_heroes = [...my_heroes, ...heroes]
console.log(all_new_heroes);

const anotherarray = [1, 2, 3, [4, 5, 6],7, [6, 7, [4, 5]]]
const real_another_array = anotherarray.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("krishna"));
console.log(Array.from("krishna"));
console.log(Array.from({name: "krishna"}));//intersting case not deciede key ya value ko change to string

let score1 = 300
let score2 = 500
let score3 = 600
console.log(Array.of(score1, score2, score3));