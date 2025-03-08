// arraydeki tek sayilarin toplamini bulan fonksiyon
function tekSayilariTopla(dizi) {
    let toplam = 0;
    for (let sayi of dizi) {
        if (sayi % 2 !== 0) { // Eğer tek sayıysa
            toplam += sayi;
        }
    }
    return toplam;
}

// Örnek kullanım
let sayilar = [10, 15, 3, 8, 7, 12, 21, 5];
console.log(tekSayilariTopla(sayilar)); // Çıktı: 51 (15+3+7+21+5)

// arrayda kaç tane çift ve tek sayı olduğunu bulan kod
function ciftVeTekSayilariBul(dizi) {
    let ciftSayac = 0;
    let tekSayac = 0;

    for (let sayi of dizi) {
        if (sayi % 2 === 0) {
            ciftSayac++;
        } else {
            tekSayac++;
        }
    }

    console.log(`Çift Sayıların Sayısı: ${ciftSayac}`);
    console.log(`Tek Sayıların Sayısı: ${tekSayac}`);
}

// Örnek kullanım
let say = [4, 7, 2, 9, 10, 13, 16, 21, 30];
ciftVeTekSayilariBul(say);






// arraydeki yazilari alfabetik siraya dizmek

let c =["c","d","a","f","g","b","e"];
console.log(c.sort());