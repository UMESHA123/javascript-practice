let firstName = "umesha";
try{
    console.log(firstName)
}catch(error){
    console.log(error);
}

//errror
try{
    console.log(lastname)
}catch(error){
    console.log("error message");
    console.log(error.name)
    console.log(error.stack)
    console.log("-------------"+error.message+" -------------")
}