let toplam = 0;
for (let a = 1; a <= 50; a++) {
  toplam += a;
}
console.log(toplam);


let sayi = Number(prompt("Bir sayı girin:"));
let asal = true;

if (sayi > 2) {
    
     for (let i = 2; i < sayi; i++) {
        if (sayi % i === 0) {
            asal = false; // Eğer tam bölünürse asal değildir
            break;
        }
    }
} else {
   asal = false; // 2'den küçük sayılar asal olamaz
}

if (asal) {
    console.log(sayi + " bir asal sayıdır.");
} else {
    console.log(sayi + " asal değildir.");
}


let yas;
do {
    yas = prompt("Yaşınızı giriniz: ");
    yas = Number(yas);
} while (isNaN(yas) || yas <18);
console.log("Yaşınız: " + yas);
