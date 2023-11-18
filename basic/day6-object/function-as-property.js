//we cann't use arrow function as a proprty 
// only use normal function
//function like a anomaous function we can access the function/method using a 
//key here in the below the object the displayMessage is a key

let obj = {
    name : 'umesha',
    displayMessage : function(){
        console.log("hello umesha!");
    },
    displayError : function(){
        console.log("error...!");
    },
    addition : function(num1,num2){
        console.log(num1 + num2);
    },
    subtraction : function(num1,num2){
        return num1-num2;
    }
};
console.log(obj);
obj.displayMessage();
obj.displayError();

obj.addition(10,10);
console.log(obj.subtraction(20,10));
