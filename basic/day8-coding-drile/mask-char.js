/**
 * mask the last 4 char with #
 * input - 123456789876543212
 * output - 12345678987654####
 */

let str = "123456789876543212";
let char = '#'.repeat(4);

console.log(str.substring(0,str.length-4) + char);

console.log(str.slice(0,str.length-4) + char);

