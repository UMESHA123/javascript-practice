const obj = {
    name : "umesha",
    city : "bengaluru"
}
console.log("name" in obj);//true
console.log("firstname" in obj);//false
//in key word is used to check whether the key is present in the obj or not

//for fetching the all the key in obj.
for(let key in obj){
    console.log(key);
}

//error
// for(let pro of obj){
//     console.log(pro)
// }









