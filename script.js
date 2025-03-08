for ( let a =1; a <100; a++){
    if (a % 3 == 0){
        console.log(a);
    }
}

let b = 5;
let toplam = 1;
while (b > 0) {
  toplam *= b;
  b--;
}
  console.log(toplam);

let c;
do {
    c = prompt("cikmak icin exit yaziniz").toLowerCase();
    
} while (c !== "exit");

console.log("cikildi");