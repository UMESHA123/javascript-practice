// *
// **
// ***

for(let i=0;i<3+1;i++){
    console.log("*".repeat(i))
}

//***
//**
//*
for(let i=4;i>0;i--){
    console.log("*".repeat(i))
}


const firstName = "umesha";
const vowels = "aeiou";
for(let i=0;i<firstName.length;i++){
    console.log(vowels.includes(firstName[i])?"is a vowel" : "not a vowel")
}