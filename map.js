const map = new Map()
map.set('IN',"india")
map.set('usi',"united state of india")
map.set('IN',"india")

console.log(map);

for (const key of map){
    console.log(key);
}

for (const [key, value] of map){
    console.log(key , ':-', value);
}


const myobject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of myobject){
//     console.log(key , ':-', value);
// }  for of typeError