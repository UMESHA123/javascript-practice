let text = "i am umesha from angaragatti";

console.log(text.includes("am"))//true
console.log(text.includes("amamm"))//false

text = "i am writing in light mode";
//text = "i am writing in dark mode";

if(text.includes('dark')){
    console.log(" i am worling in dark mode");
}else{
    console.log(" i am working in light mode")
}