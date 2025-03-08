let toplam = 0;

for (let i = 10; i <= 20; i++) {
    toplam += i; // toplam = toplam + i
}

console.log("10 ile 20 arasındaki sayıların toplamı:", toplam);


let b = 5;

while (b > 1) {
    b--;
    console.log(b);
}


let sayi;

do {
    sayi = prompt("Lütfen 10 ile 50 arasında bir sayı girin:");
    sayi = Number(sayi); // Kullanıcının girdiğini sayıya çeviriyoruz
} while (sayi < 10 || sayi > 50); // Eğer sayı 10 ile 50 arasında değilse, tekrar sorar

console.log("Tebrikler! Geçerli bir sayı girdiniz:", sayi);
