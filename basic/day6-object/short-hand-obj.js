function getObj(name,age){
    return {
        name : name,
        age : age,
    }
};
console.log(getObj("umesha",20));
//the short hand obj is we can see in the above the function the function return thenew 
//objet and inside the object we have same key and value name.
// the javascript we understand those key and the parameter and then create the object 
//and return it.
//so short hand obj is like.
function getObjNew(name,age){
    return {
        name,
        age,
    }
};
console.log(getObjNew("umesha",22))

//we can see both the function will work and returning the obj.


const student = "ramesha";
const course = "reactjs";

console.log({student,course});