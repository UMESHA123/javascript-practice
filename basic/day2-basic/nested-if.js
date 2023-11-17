let num = 10;
if(num%2 == 0){
    console.log("the number is even");
    if(num % 4 == 0){
        console.log(`${num} is divisiable by 4`);
    }else{
        console.log(`${num} is not divisiable by 4`);
    }
}else{
    console.log("the  number is odd")
    if(num % 5 == 0){
        console.log("${num} is divisiable by 5");
    }else{
        console.log("${num} is not divisiable by 5");
    }
}