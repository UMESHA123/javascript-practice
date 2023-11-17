function greeatMeassge(){
    console.log("hello umesha")
}

greeatMeassge();

//-----------------------------//
greeatMeassgeNew('umesha')

function greeatMeassgeNew(person){ // person is a parameter
    console.log(`hello - ${person}`)
}

greeatMeassgeNew('umesha')//um esha is a agrument
greeatMeassgeNew("ramesha")

function Great(name,city){
    console.log(name);
    console.log(city);
}
Great("umesha","angaragatti")
Great("umesha","hosakatti")
Great("umesha")//umesha undefined



function sum(num){
    return (num * (num + 1))/2
}
console.log(sum(2));