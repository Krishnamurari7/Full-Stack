const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

for(const key in myObject){
    console.log(key);
}

for(const key in myObject){
    console.log(myObject[key]);
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const prog = ["js", "cpp", "rb", "py", "java"]
for(const key in prog){
    console.log(key);
}