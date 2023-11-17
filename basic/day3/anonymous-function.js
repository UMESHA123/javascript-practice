//the anonymaous function are doesn't have any name and identity

//great(); this will gives a error like reference error
//but has in case of the normaul function it will work fine
//because we are useing the greate variable before declering it. thats why it showing 
//reference error.
//greate is not a function.

let great = function (){
    console.log("hello umesha");
}
great();
console.log(typeof great);//variable became function

let greatNew = function GreateNew (){
    console.log("hello umesha new");
}
greatNew();
//GreateNew(); this will gives an error message.


