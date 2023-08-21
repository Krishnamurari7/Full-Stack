const coding  = ["java", "python", "js", "c++", "c"]

coding.forEach(function name(item){
    console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

function print(item){
    console.log(item);
}
coding.forEach(print)