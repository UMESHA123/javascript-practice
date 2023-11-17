function sumFun(num){
    let sum = 0
    for(let i=0;i<=num;i++){
        sum = sum + i;
    }
    return sum;
}
let res = sumFun(10);
console.log(res);

//pure function
//the pure function is a function which accepts the arguments and it does'nt change the 
//data type of those arguments and return it.

