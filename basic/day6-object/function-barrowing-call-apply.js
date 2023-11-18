// const user1 = {
//     name : " umesha",
//     age : 22,
//     sayHI : function(){
//         console.log(this.name);
//     },
// };

// const user2 = {
//     name : " ramesha",
//     age : 25,
//     sayHI : function(){
//         console.log(this.name);
//     },
// };
// const user3 = {
//     name : " ram",
//     age : 20,
//     sayHI : function(){
//         console.log(this.name);
//     },
// };


// user1.sayHI();

//we can see the say hi function is repeted in every obj

//we can solve this by 

const user1 = {
    name : " umesha",
    age : 22,
    
};

const user2 = {
    name : " ramesha",
    age : 25,
   
};
const user3 = {
    name : " ram",
    age : 20,
    
};
// // function sayHi(){
// //     console.log(this.name);
// // };

// //the obj1,obj2.. are barrow this sayHi function is called function barrowing.

// //error
// // user1.sayHi();

// sayHi.call(user1);
// sayHi.call(user2);
// sayHi.call(user3);

function sayHi(degree,course){
    console.log(this.name,degree,course);
};

// sayHi.call(user1);//user1,undefined,undefined

// sayHi.call(user1,'BE','ECE')
//call is a method of sayHi function.

// sayHi.apply(user1,["be",'mech']);
// sayHi.apply(user2,['be','ece']);


//implicit and explicit binding
//mplicit binding is called 
// const user4 = {
//     name : " ram",
//     age : 20,
//     function sayHi1(degree,course){
//         console.log(this.name,degree,course);
//     };
// };
// in this case the this is binding to the user4

//the explicit binding us done by using call and aplly method.


//bind

// const result = sayHi.bind(user1,"b-tech","ece");
// result();
//what bind will do is it return the function and i will stored in the result variable
//and then call it

//or
const result = sayHi.bind(user1);
result("b-tech","ece");

//the call apply and bind are the explicit bind
//if we create the method in the same object then it is called implicit binding.

