//obj = {key : value} internally the key is stored in string type

let obj = {
    name : "umesha",
    age : 20,
    city : "bengaluru",
    mobile : 'samsong'
};

console.log(obj);
console.log(typeof obj);

console.log(obj.name);
console.log(obj.age);
console.log(obj.city);

//or 

console.log(obj["name"])//name is a key and it is of string
console.log(obj["age"])//name is a key and it is of string
console.log(obj["city"])//name is a key and it is of string

//name is a key and it is of string for example

let objNew = {
    name : "umesha",
    age : 20,
    city : "bengaluru",
    mobile : 'samsong',
    1 : "true"
};
console.log(objNew);
/*
output:
{
    name : "umesha",
    age : 20,
    city : "bengaluru",
    mobile : 'samsong',
    "1" : "true"
};

see 1 is of string type
*/

/**
 * {
    propertys
    ...
    ...
    ...
   };
   proprtys key value pair or a method/function
 */

   