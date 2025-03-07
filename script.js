let a =18;
if ( a%2 ==0 ) {
    console.log("Cut sayidir");
}else {
    console.log("Tek sayidir");
}


let b =25;
if (b < 18){
    console.log("resitsiniz");
}else(b >= 18);{
    console.log("resit degilsiniz");
}

let c = 5;
switch (c) {
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break;
    default:
        console.log("Hatalı giriş");
        break;
}

let Notlar = "C";

switch (Notlar) {
    case "A":
        console.log("Mükemmel");
        break;
    case "B":
        console.log("iyi");
        break;
    case "C":
        console.log("Orta");
        break;
    case "D":
        console.log("Geçer");
        break;
    case "F":
        console.log("Başarısız");
        break;
    default:
        console.log("Hatalı giriş");
        break;
}