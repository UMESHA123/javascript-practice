//globalany variable which is not inside the function is called global variable
//example;1
/*
* var num = 10;
* console.log(10);
*/

//example - 02
// var num = 10;

// function fun(){
//     console.log(num);
// }
// fun();

//local
//example - 03
// function fun(){
//     let x = 10;//x is a local variable
// }
// console.log(x);//error x is not defined.


//block
//example - 04
// {
//     let a = 10;
//     let b = 20;
//     console.log(a);
//     console.log(b);
// }




//example - 05
// {
//     let a = 10;
//     let b = 20;
// }
// console.log(a); //error a is not defined
// console.log(b); // error b is not defined

//example - 06
// {
//     const a = 10;
//     const b = 20;
//     console.log(a);
//     console.log(b);
// }


//example - 07
// {
//     const a = 10;
//     const b = 20;
// }
// console.log(a);//error a is not defined
// console.log(b);//error b is not defined

//example - 08
// {//var is a global variable
//     var a = 10;
//     var b = 20;
// }
// console.log(a);
// console.log(b);

//example - 09
// {//var is a global variable
//     var a = 10;
//     var b = 20;
//     console.log(a);
//     console.log(b);
// }


//example - 10
// function fun(){
//     var a = 10;
//     var b = 10;
// }
// console.log(a);
// console.log(b);
//error a and b is not defined.
//

//example - 11;
// if(true){
//     var a = 10;
// }
// console.log(a);
//works