// let x = 10;

// function fun(){
//     console.log(x);
//     let y = 20;
//     function fun1(){
//         console.log(y);
//     }
//     fun1();
// }

// fun()


//example - 02

let x = 10;

function fun(){
    console.log(x);
    let y = 20;
    function fun1(){
        console.log(y);
        let z = 30;
        function fun2(){
            console.log(z);
        }
        fun2();
    }
    fun1();
}

fun()
