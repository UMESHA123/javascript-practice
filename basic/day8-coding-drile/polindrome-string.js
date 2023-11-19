// string = 'umesha';
string = 'car';
// string = 'radar';

// function polindrome(){
//     let rev = "";
//     for(let char of string){
//         rev = char + rev;
//     }
//     return rev;
// }
// const res = polindrome()
// console.log(res == string);


// function polindrome(){
//     let string_stplit = string.split("");
//     let rev = string_stplit.reverse();
//     let rev_str = rev.join("");
//     return rev_str;
// }   
// console.log(polindrome() === string)

function polindrome(){
    let left = 0
    let right = string.length-1;
    while(left <= right){
        if(string[left] != string[right]){
            return false;
        }
        left = left + 1;
        right = right - 1;
    } 
    return true;
}
console.log(polindrome())