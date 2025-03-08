function ortalama(a,b,c) {
    return (a+b+c)/3;
}
let a = 3;
let b = 4;
let c = 5;
console.log(ortalama(a,b,c)); 


function buyukBul(x,y){
   return  Math.max(x, y);
}
let x = 4;
let y = 6;
console.log(buyukBul(x,y));


function faktoriyel(n) {
    return n === 0 ? 1 : n * faktoriyel(n - 1);
}
let n = 5;
console.log(faktoriyel(n));