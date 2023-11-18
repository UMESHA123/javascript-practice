const person = {
    name : "umesha",
    age : 22
}
console.log(person);

const person2 = person;
person2.name = "ramesha"
console.log(person)
console.log(person2)

//this is because the object or copyed by refence not by obj
//this is called shallow copy. in this the both person and person2 are 
//refereing the same memory location.


//we can overcome this problum by using deep copy by using spread operater. are 
// by using the etranal library.


// example fo deep copying the object but it is not a complite deep copy 

const p1 = {
    name : "ramesha",
    age : 22,
}
const p2 = Object.assign({},p1);
console.log(p1);
console.log(p2);
p1.name = "umesha"
console.log(p1)
console.log(p2)


//for example the obj have nested obj like

const p3 = {
    name : "ram",
    age : 100,
    city : {
        permanetCity : "bengaluru",
    }
}

const p4 = Object.assign({},p3);
console.log(p3)
console.log(p4)

p3.name = "jain"
console.log(p3)
console.log(p4)

p3.city.permanetCity = "chain";
console.log(p3)
console.log(p4)
//in this case the object is behaives like a shallow copy.
