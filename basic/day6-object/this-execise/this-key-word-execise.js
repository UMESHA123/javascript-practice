//ex-01

// function displayName(){
//     console.log(this);
// }

// const user1 = {
//     name : "umesha",
//     displayName,
// };

// user1.displayName();


//ex-02
// function displayName(){
//     console.log(this);
// }

// const user1 = {
//     name : "umesha",
//     showObj : displayName,
// };

// user1.showObj();


//ex-03
// function displayName(){//this <--- windows obj
//     console.log(this);//windows obj
// }

// const obj1 = {
//     name : "umesha",
//     showMessage : function(){//this <-- is a obj1
//         displayName()//<--this is a windows obj
//     }
// }

// obj1.showMessage();


// //ex-04  explicite binding
// const showMessage = () =>{
//     console.log(this);//this <--window obj
// };

// const obj1 = {
//     name : "umesha",
// };

// showMessage.apply(obj1);

//here we passing the ibj1 to the showmessahe
//method but still we geting the windows obj
//this is because arrow function


//ex-05  explicite binding
// function showMessage(){
//     console.log(this);//this <--obj1
// };

// const obj1 = {
//     name : "umesha",
// };

// showMessage.apply(obj1);
//here the narmal function is get the obj1.


//ex -06
// function user1() {
//     console.log(this);
// }

// const u1 = new user1();
//user1 object.

// //ex -07
// const obj = {
//     name : "umesha",
//     sayHi : function(){
//         console.log("hi "+this.name);
//     },
// };
// obj.sayHi();

//ex - 08

const obj = {
    name : "umesha",
    sayHi : function(){
        console.log("hi "+this.name);//here this.name is undfined because we are call this by using person2
    },                          //not by obj.fun()call
};

const person2 = obj.sayHi;
console.log(person2);//person2 will get the entire sayHi function
person2();