let a = Number(prompt("Bir sayı giriniz: "));
let b = Number(prompt("Bir sayı daha giriniz: "));
function toplam(a,b) {
    return a + b;
}

let sonuc1 = toplam(a,b);
console.log(sonuc1); 





function kare(sayi2) {
    return sayi2 * sayi2;
}

let sayi2 = Number(prompt("Bir sayı giriniz: "));
let sonuc2 = Kare(sayi2);
console.log(sonuc2); 



function yasHesapla(dogumYili) {
    let suankiYil = new Date().getFullYear(); // Güncel yılı al
    return suankiYil - dogumYili;
}

let dogumYili = Number(prompt("Doğum yılınızı giriniz: "));
let yas = yasHesapla(dogumYili);
console.log("Yaşınız:", yas);
