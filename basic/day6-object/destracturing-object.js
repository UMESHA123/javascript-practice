let obj = {
    name : "umesha",
    address : {
        city : "bengaluru",
        state : "karnataka"
    },
    course : ['html','css','js','reactjs']
}

let {name,address,course} = obj;

console.log(name);
console.log(address);
console.log(course);


let objNew = {
    name1 : "umesha",
    address1 : {
        city1 : "bengaluru",
        state1 : "karnataka"
    },
    course1 : ['html','css','js','reactjs']
}

let {name1} = objNew;
console.log(name1);


let o1 = {
    n1 : "umesha",
    a1 : {
        c1 : "bengaluru",
        c2 : "masur",
        c3 : "mysure",
    },
    co1 : [1,2,3,4]
}
// const {n1, ...rest} = o1;
// console.log(n1);
// console.log(rest);


//re-naming
// const {n1 : userName} = o1;
// console.log(userName);

//accesing the nested object key value pair
// const {a1 : {c1}} = o1;
// console.log(c1)

// const {n1, a1 : {c1}, co1} = o1;
// console.log(n1);
// console.log(c1);
// console.log(co1);

const {a1 : {c1,c2,c3}} = o1;
console.log(c1)
console.log(c2)
console.log(c3)