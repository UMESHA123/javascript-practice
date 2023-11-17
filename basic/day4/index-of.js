let firstname = "umesha";

console.log(firstname.indexOf('u'))//return index of u if present else -1
console.log(firstname.indexOf('o'))//return index of u if present else -1

console.log(firstname.indexOf("sh"))
console.log(firstname.indexOf("SH".toLowerCase()))

const find = findChar = (text,char) => text.indexOf(char) == -1 ? "char is not found": "char is found"
console.log(findChar("hi i am umesha","amq"))
console.log(findChar("hi i am umesha","am"))

