function Sum(min,max){
    let s = 0
    for(let i=min;i<max;i++){
        s = s + i;
    }
    return s;
}
console.log(Sum(1,10));