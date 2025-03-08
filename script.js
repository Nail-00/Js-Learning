let a = [1,2,4,5,3,9,6,0,11];

for (let sayi of a){
    if(sayi % 2 == 0){
        console.log(sayi);
    }

}


let names = [];
for (let i = 0; i < 3; i++) {
    names.unshift(prompt("Bir isim girin:"));
}
console.log("Orijinal:", names);
console.log("Ters Çevrilmiş:", names.reverse());



let enBuyuk = [15,42,55,35,13,39,46,20,11];
function enBuyukBul(enBuyuk){
    let max = enBuyuk[0];
    for(let i = 0; i < enBuyuk.length; i++){
        if(enBuyuk[i] > max){
            max = enBuyuk[i];
        }
    }
    return max;
}
console.log(enBuyukBul(enBuyuk));

function enBuyukBul(arr) {
    return Math.max(...arr);
}
console.log(enBuyukBul(enBuyuk));
