let obj = {
    name : "umesha",
    age : 20,
}
console.log(obj);
obj.city = "bengaluru";
console.log(obj);

//the computed properties is 

const course = "html";

let objNew = {
    name : "umesha",
    age : 20,
    [course] : "the course is not avilable."
}

console.log(objNew)
console.log(objNew[course]);

// the course is not a key basicaly course is a some value that value is the 
// key 
//if value is not present the undefined will displayed