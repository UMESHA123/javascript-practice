//destracture means unpacking an array or object

let nums = [1,2,3,4];
let [a,b,c,d] = [1,2,3,4];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let [a1,b1,c1,d1] = nums;
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);


nums = [1,2,3,[1,2,3,4,5,6]]
let [,,,num] = nums;
console.log(num);

nums = [[1,2,3,4,5],1,2,3,4,5,6];
let [course,...rest] = nums;
console.log(course)
console.log(rest)


//application swping

let x = 10;y = 20;

[y,x] = [x,y];
console.log(x)
console.log(y)