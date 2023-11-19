const family = [
    {name : "umesha", age : 20},
    {name : "ramesha", age : 23},
    {name : "sham",      age : 30},
    {name : "rama", age : 26},
    {name : "ramesh", age : 60},
    {name : "suresh", age : 70},
];

// let totalAge = 0;
// for(let member of family){
//     totalAge += member.age;
// }
// console.log(totalAge/family.length);


//or 

let totalAge = family.reduce((acc,cur) => acc + cur.age,0);
console.log(totalAge/family.length);