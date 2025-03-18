//if3, if4, if5, if9, if11, if17, if18, case8, case9, case12 larni bajaring




        // UYGA VAZIFA 
       
//if3, if4, if5, if9, if11, if17, if18, case8, case9, case12 larni bajaring

// TASK 1 : if3. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.

let a = parseInt(prompt(`Birinchi sonni kiriting`));
let b = parseInt(prompt(`Ikkinchi sonni kirting`));
let c = parseInt(prompt(`Uchinchi sonni kiriting`));

if ( a > 0 && b > 0 && c > 0){
    alert(`Uchala son ham Musbat`);
}
else if( a * b < 0 && c > 0){  // Kopytuvchilarning birortasi manfiy bo'sa kopaytima ham manfiy boladi  
    alert(`Ikkitasi Musbat`);
}
else if( a * c < 0 && b > 0){
    alert(`Ikkitasi Musbat`);
}
else if(c * b < 0 && a > 0){
    alert(`Ikkitasi Musbat`);
}
else if( a * b < 0 && c < 0){
    alert(`Bittasi Musbat`);
}
else if( a * b > 0 && c > 0){
    alert(`Bittasi Musbat`);
}
else(
    alert(`Bularni birortasi ham Musbat Emas`)
);


//TASK 2 : if4. Ikkita butun son berilgan. Shu sonlarning kattasini aniqlovchi programma tuzilsin.

/*let a = parseInt(prompt(`Birnchi sonni kirting`));
let b = parseInt(prompt(`Ikkinchi sonni kiriting`));

if (a > b){
    alert(`Katta son : ${a}`)
}
else if(a < b){
    alert(`Katta son :${b}`)
}
else(`Butun son kiriting`)*/


// TASK 3: if5. Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin.

/*let a = parseInt(prompt(`Birnchi sonni kirting`));
let b = parseInt(prompt(`Ikkinchi sonni kiriting`));

if (a > b){
    alert(`2 ( Ikkinchi raqam kichik)`)
}
else if(a < b){
    alert(`1 (Birinchi son kichik)`)
}
else(`Noto'g'ri qiymat kiritdingiz`)*/


// TASK 4 :if9. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B bu sonlarning kattasini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.

/*let a = parseInt(prompt(`Birnchi sonni kirting`));
let b = parseInt(prompt(`Ikkinchi sonni kiriting`));

if (a !== b && a > b){
    alert(`Katta son: ${a}`)
}
else if (a !== b && a < b){
    alert(`Katta son: ${b}`)
}
else if(a = b){
    alert(`0`)
}
else(`Noto'g'ri qitmat kiritdingiz`)*/


//TASK 5: if11. Uchta son berilgan. Shu sonlarni o`ratachasi (ya'ni katta va kichik sonlar orasidagi son) ni aniqlovchi programma tuzilsin.

/*let a = parseInt(prompt(`Birnchi sonni kirting`));
let b = parseInt(prompt(`Ikkinchi sonni kiriting`));
let c = parseInt(prompt(`Uchinchi sonni kiriting`));

if (a > b && b> c){
    alert(`O'rtacha son : ${b}`);
}
else if(c > b && b > a){
    alert(`O'rtacha son : ${b}`);
}
else if(a > c && c > b){
    alert(`O'rtacha son : ${c}`);
}
else if(b > c && C > a){
    alert(`O'rtacha son : ${c}`);
}
else if(b > a && a > c){
    alert(`O'rtacha son : ${a}`);
}
else if(c > a && a > b){
    alert(`O'rtacha son : ${a}`);
}
else(`Noto'g'ri qitmat kiritdingiz`);*/


//TASK 6 : if17. Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini aniqlovchi programma tuzilsin. Kabisa yilida 366 kun bor, kabisa bo'lmagan yilda 365 kun bor. Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar ichida faqat 400 ga karrali bo'lganlari kabisa yil hisoblanadi. Masalan 300, 1300 va 1900 kabisa yili emas. 1200 va 2000 kabisa yili.

/*let a =parseInt(prompt(`Biror yil kiriting , men bu yilda necha kun borliogini aniqlab beraman`));

if ((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)){
    alert(`Kabisa yili : 366 kun`);
}
else{
    alert(`Kabisa yili emas : 365 kun`);
}*/


// TASK 7 : if18. 1-999 oraliqdagi sonlar berilgan. Berilgan sonni "ikki xonali juft son", "uch xonali toq son" va x.k. ekranga yozadigan programma tuzilsin.

/*let a = parseInt(prompt(`Son kiriting [1 - 999]`));

if (a > 99 && a < 1000){
    if ( a % 2 == 0){
        alert(`Uch xonali JUFT son`);
    }
    else{
        alert(`Uch xonli TOQ son`);
    }
}
else if( a < 100 && a > 9 ){
    if ( a % 2 == 0){
        alert(`Ikki xonali JUFT son`);
    }
    else{
        alert(`Ikki xonli TOQ son`);
    }
}
else{
    alert(`Faqat 1 dan 999 gacha son kiriting`);
    }*/

// TASK 8 : Case1. K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5 gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.

/*let k = parseInt(prompt(`Bahoyingizni kiriting [1 - 5]`))

switch(k){
    case 1 :
        alert(`Yomon`);
        break;
    case 2 :
        alert(`Qoniqarsiz`);
        break;
    case 3 :
        alert(`Qoniqarli`);
        break;
    case 4 :
        alert(`Yaxshi`);
        break;
    case 5 :
        alert(`A'lo`);
        break;
    default:
        alert(`Xato`);
    
}*/

// TASK 9 : Case2. Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")


/*let a = parseInt(prompt(`Oy raqamini kiriting , men qaysi Fasilga tegishli ekanligini ko'rsataman [1 - 12]`));

switch(a){
    case 12:
    case 1 :
    case 2 :
        alert(`Qish`);
        break;
    case 3:
    case 4 :
    case 5 :
        alert(`Bahor`);
        break;
    case 6:
    case 7 :
    case 8 :
        alert(`Yoz`);
        break;
    case 9:
    case 10 :
    case 11:
        alert(`Kuz`);
        break;
    default:
        alert(`Noto'g'ri qiymat`);
}*/

// TASK 10 : Case3. Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma tuzilsin.

/*let a = parseInt(prompt(`Oy raqamini kiriting , men  bu oyda necha kun borligini tekshirib beraman [1 - 12]`));
switch(a){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert(`Bu oyda 31 kun bor`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert(`Bu oyda 30 kun bor`);
        break;
    case 2:
        alert(`Bu oyda 29 kun bor , lekin kabisa yillarida 28 kun`);
        break;
    default:
        alert(`Noto'g'ri qiymat`)
}*/



// DARSDA ISHLANISHI KERAK BOLGAN MASALALAR (QO'SHIMCHA)

// Task 1 : if3. Uchta son berilgan. Shu sonlarni avval kichigini keyin kattasini ekranga chiqaruvchi programma tuzilsin.

/*let a = parseInt(prompt(`Birinchi sonni kiriting`));
let b = parseInt(prompt(`Ikkinchi sonni kirting`));
let c = parseInt(prompt(`Uchinchi sonni kiriting`));
let bigger = a;
let smaler = a;

if (b > bigger ){
    bigger = b;
}
if (c > bigger){
    bigger = c;
}

if (b < smaler){
    smaler = b;
}
if (c < smaler){
    smaler = c;
}

alert(`Eng katta son: ${bigger} , Eng kichigi: ${smaler}`);*/


// Task 2 : if4. Uchta butun son berilgan. Shu sonlarni ikkitasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.

/*let a = 20;
let b = 20;
let c = 10;

if (a === b ){
    alert(`Javob : 3`);
}
else if(a === c){
    alert(`Javob : 2`);
}
else{
    alert(`Javob : 1`);
}*/

// Task 3 : if5. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
//agar x < -2 yoki x > 2 bo’lsa 2 * x 
//aks holda -3 * x;

/*let a = parseInt(prompt(`Biror son kiriting`));

if ( a < -2){
    alert(a * 2);
}
else if( a > 2){
    alert(a * (-3))
}
else(
    alert(`Butun son kiriting !!!`)
)*/
