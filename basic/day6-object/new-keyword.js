// function User(){

// }
// const user = User();
// console.log(user);//
// console.log(typeof user);//this is a function

//but if we use a new key word then it becames the object


// function User(){//constractor
//     //if we want to add a property then use the this key word
//     (this.name = " umesha"),
//     (this.age = "22")
// }
// console.log(this)//this is also refering to the object.
// const user = new User();
// console.log(user);//object
// console.log(typeof user);//object
// console.log(user.name)
// console.log(user.age)

//new key word create a new object


function User(name,age){//constractor
    //if we want to add a property then use the this key word
    (this.name = name),
    (this.age = age)
}
console.log(this)//this is also refering to the object.
const user = new User("ramesha",22);
console.log(user);//object
console.log(typeof user);//object
console.log(user.name)
console.log(user.age)

const user1 = new User("jain",24);
console.log(user1.name)
console.log(user1.age)