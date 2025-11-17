// let obj1 = {
//     sayName:function(){
//         const child = ()=>{
//             console.log(this);
//         }
//         child();
//     }
// }
// obj1.sayName();

// closures -> ek function jo return kare dusra function, aaur use kare parent function ka koi variable
// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// var fnc = counter();
// fnc()
// counter();


// try catch
function divide(a,b){
    try{
        if(b === 0){
            throw Error("Koi gadbad hui");
        }
        console.log(a/b);
    }
    catch(err){
        console.error(err);
    }
}
divide(10,0);