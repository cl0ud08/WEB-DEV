function sum(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}function sub(a,b){
    return a-b;
}function divide(a,b){
    return a/b;
}

function dooperation(a,b,op){
    return op(a,b);
}
console.log(dooperation(2,3,mul));