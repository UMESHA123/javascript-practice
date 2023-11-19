//example - 01

// const string = "hi i am umesha from bengaluru";

// function fun(){
//     const vowels = ["a",'e','i','o','u'];
//     let res = [];
//     for(let char of string){
//         if(!vowels.includes(char.toLowerCase()) && !(char === " ")){
//             res.push(char);
//         }
//     }
//     return res;
// }
// console.log(fun());


//example - 02

const string = "hi i am umesha from bengaluru";

function fun(){
    const vowels = ["a",'e','i','o','u'];
    let res = "";
    for(let char of string){
        if(!vowels.includes(char.toLowerCase())){
            res += char;
        }
    }
    return res;
}
console.log(fun());