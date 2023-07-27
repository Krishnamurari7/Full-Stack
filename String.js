const name = "krishna-murari"
const roll_number = 65
console.log(name + roll_number + "value")
console.log(`hello my name is ${name} and my repo cont is ${roll_number}`)
const game = new String('Krishna')
console.log(game[0])
console.log(game.__proto__)
console.log(game.length)
console.log(game.toLowerCase())
console.log(game.toUpperCase())
console.log(game.charAt(0))
console.log(game.indexOf('r'))

const newstring = game.substring(0,5)
console.log(newstring)

const another = game.slice(-3,8)
console.log(another)

const string_trim = "  krishna  "
console.log(string_trim)
console.log(string_trim.trim())

const url = "https//ubiography.org.in"
console.log(url.replace('ubiography','krishna'))
console.log(url.includes('sonu'))