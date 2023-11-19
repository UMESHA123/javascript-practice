//encode by 2 char

const string = "umesha";
function encode(){
    let res = ""
    for(let i = 0;i<string.length;i++){
        let temp = string.charCodeAt(i) + 2;
        res = res + String.fromCharCode(temp);
    }
    return res;
}
console.log(encode());