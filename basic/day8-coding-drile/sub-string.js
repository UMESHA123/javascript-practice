// let string = 'umesha';
let string = 'abc'
for(let i=0;i<string.length;i++){
    let temp = "";
    for(let j = i;j<string.length;j++){
        temp = temp + string[j];
        console.log(temp);
    }
}