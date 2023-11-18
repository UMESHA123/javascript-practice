// const obj = {
//     name : " umesha",
//     address : {
//         city : "bengaluru",
//         area : "maysure"
//     }
// }
// console.log(obj.address.city);
// console.log(obj.address.area);
// console.log(obj.address.areaNew);//undefined

const obj = {
    name : " umesha",
    // address : {
    //     city : "bengaluru",
    //     area : "maysure"
    // }
}
// console.log(obj.address.city);//error

//soltion
if(obj.address != undefined){
    console.log(obj.address.city)
}else{
    console.log("address is not found!")
}


//or by using optiona chaining
// by using ? but ? is not a operater.
console.log(obj.address?.city)//undefined


const o1 = {
    n1 : "umesha",
    displayAdd : function(){
        console.log("address");
    },
    displayCity : function(){
        console.log("city");
    }
}

// o1.displayAdd();
// o1.displayCity();

//if the teh proptery is not present and if we are accesing it will display undefined
//but has in case of accesing the function property from the 
//obj and which is not present then it gives an error.

//error.
// o1.displayAddNew();

//we can solve this by using optional chaining.
o1.displayAddNew?.();//undefined.