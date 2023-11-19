/**
 * reduce is also a method 
 */

const arr = [1,2,3,4,5,6];

let initialValue = 0;
//reduceFuc(acc,cut,cur_index,arr)
const reduceFuc = (acc,cur) => acc+cur;

const output = arr.reduce(reduceFuc,initialValue);
console.log(output)