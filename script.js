// array.map() metodu
let sayilar = [2,3,4,5];
let kup = sayilar.map(ss => Math.pow(ss,3));
console.log(kup);

let sayilar2 = [2,3,4,5];
let kup2 = sayilar2.map(function(ss){
  return ss*ss*ss;
});
console.log(kup2); 

// array.filter() metodu
let a = [2,3,4,5];
let tek = a.filter(b => b%2 !== 0);
console.log(tek);

// array.reduce() metodu
let c = [2,3,4,5];
let enBuyuk =c.reduce((d,e) => Math.max(d,e),-Infinity );
console.log(enBuyuk);

// array.find() metodu
let f = [2,3,4,5];
let bul = f.find(g => g%2 == 0);
console.log(bul);