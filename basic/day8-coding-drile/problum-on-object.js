const employee = [
    {name : "umesha",experience : 6},
    {name : "ramesha",experience : 2},
    {name : "ram",experience : 1},
    {name : "sham",experience : 3},
    {name : "jain",experience : 5},
]

for(let em of employee){
    if(em.experience >= 5){
        console.log(em);
    }
}