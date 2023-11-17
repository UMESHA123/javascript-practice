const Great = () => {
    console.log("hello")
}

Great();


const SumNum = (num1,num2) => {
    console.log(num1 + num2);
}

SumNum(10,10);

const SumNumNew = (num1,num2) => {
    return num1 + num2;
}

let res = SumNumNew(10,10)
console.log(res)


const sumNumNew = (num1,num2) => num1 + num2


let r = sumNumNew(10,10)
console.log(r)


const SumTwo = (x,y) => x>y ? x+y : x-y;
console.log(SumTwo(10,20))
console.log(SumTwo(22,20))