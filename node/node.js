//cishi
//haha
console.log("hello node");
{
var a = 10;
let b = 11;  //let有作用域 只在当前代码段
    console.log(b);
}
console.log(a);
// console.log(b);

// var a=[];
// for(var i=0;i<10;i++){
//     a[i]=function(){
//         console.log(i);
//     };
// }
// a[6](); //10

var a=[];
for(let i=0;i<10;i++){
    a[i]=function(){
        console.log(i);
    };
}
a[6]();    //6