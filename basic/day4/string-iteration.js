let firstname = "umesha"
for(let char of firstname){
    console.log(char);
}

for(let char of firstname){
    console.log(char);
    if(char === "e"){
        break;
    }
}

for(let char of firstname){
    
    if(char === "e"){
        continue;
    }
    console.log(char);
}


let count = 0;
for(let _ of firstname){
    count++;
}
console.log(count)


let lastName = "ramesha";
for(let i=0;i<lastName.length;i++){
    console.log(lastName[i]);
}

for(let i=0;i<lastName.length;i++){
    console.log(lastName.charAt(i));
}

for(let i=0;i<lastName.length;){
    console.log(lastName.charAt(i));
    i = i + 2
}

for(let i=0;i<lastName.length;i = i+2){
    console.log(lastName.charAt(i)); 
}