//this key word in js
//this key word is refered to current object that executing.

// const obj = {
//     name : "umesha",
//     fun : function(){
//         console.log(this)//it gives the entire object and also it is a implicit binding
//         console.log(this.name);
//     },
// };

// obj.fun();
//when object obj is calles the method it internaly pass the same obj to 
//that function or method that obj is stroed in the this key word


//this key word in function
// function Num(){
//     console.log(this)
// }
// Num();

//here this is referd to the global object i.e window object

//window is a globale object
//it has a some functionalitys like alter and some other functionalitys
//we can acces those using windows.alert("hi user").
//or we can use alter("hi user").
//this alter is a method of window obj.


//we don't use the arraow function in the obeject
//because if acces the object property using this key word like this.name, this.city
//basically this key word is refering to the global object i.e window object

//for example:
// const display = () => {
//     console.log(this)
// }
// display();

//but if use the narmal function it will work fine


//other problum with normal function
const user1 = {
    name : "umesha",
    
    showMessage : function(){
        console.log(this.name);//umesha it works
        function sayHello(){
            console.log(this.name)//undefined this will not work
        }
        sayHello()
    }
}
user1.showMessage();


//this is because the showMessage method/function is executed by the user1 
//object by the sayHello function is not executed by the user1 object
