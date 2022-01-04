/*============tekrar===============*/

let myArray = ["first", "second", "third", "fourth"]
let totalArray = [1, 2, 3, 4, 5, 6, 7, 8]
let numArray = [4, 25, 333, 42, 5]
let a = "50";

function compare(params) {
    if (params >= 50) {
        console.log(`${params}elliden büyük`)
    }
}
compare(51)

for (let i = 0; i < numArray.length; i++) {  // for'u globalde çalıştırırsak js çalışınca 1 kere çalışır
    const element = numArray[i];
    console.log(element)

}
function calculate(params) {
    for (let i = 0; i < params.length; i++) { // fonksiyona parametre verirsek her yerden çağırabiliriz.
        const element = params[i];
        console.log(element)
    }
}
calculate(totalArray)


console.log(typeof numArray)
function calc(params) {
    let sum = 0;
    if (params.length > 0) {           // Bu fonksiyon bir arrayın toplamını gösteriyor.
        for (let i = 0; i < params.length; i++) {
            if (typeof params[i] === "number")  // Bu komut arrayin elemanları stringse toplamasın number ise toplasın 

                sum += params[i]

        }
    }
    return sum;
}
console.log(calc(totalArray))
console.log(calc(numArray))
console.log(calc(myArray)) //Değer string gelince başında 0 la yan yana yazar
console.log(calc([]))  // boş array gelirse başlangıç değeri 0 olduğu için çıktısı 0 olur


let result = calc(numArray) // fonksiyonu bir değişkene atayabiliyoruz.
console.log(result)

/*================== HİGH ORDER FUNCTİON==================*/
//fonksiyonu değişkene fonksiyon olarak atayabiliyoruz. yeni bir fonksiyon ismi ile başka bir fonksiyonu  parantezsiz yazılıyor parantez sonucunu getiriyordu.
// parantez yazılmazsa foksiyonun tamamını başka fonksiyona atayabiliyoruz.

let newFunc = calc; // yukarıdaki fonksiyonla aynı görevi icra ediyor.
console.log(newFunc(totalArray))  // Fonksiyonlar fonksiyonların argümanları olarak kullanabilirler.


function highOrder(params) {
    return params * 2;
}
console.log(highOrder(5))  // high order fonksiyonda buraya fonksiyon atayabiliyoruz.

let numara = 5;

function numFive(param) {
    return param + 7;           //7 dönen fonksiyon
}
console.log(numFive())
// numara= numFive();
console.log(highOrder(numFive(numara))) // fonksiyon içerisinde de fonksiyon kullanabilir.

// call back fonksiyonlar bir fonksiyonun içerisinde kullanılan fonksiyon denir.

const callback = (x) => {
    return x * 2;
}
function hangar(param) {
    return param;
}
console.log(hangar(callback)) // argümansız yazarsak çıktı olarak fonksiyonu yazar.

const hang = (a) => {
    return hanging = (b) => {  // bir fonksiyonu başka bir fonksiyonun değerine ata
        return a + b * 2;
    }
}
console.log(hang(5)(2))

let newArr = [5, 6, 9];

function find6(params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] === 6) {
            return params[i]
        } else {
            return "6 yok";
        }

    }
}
console.log(find6(newArr))


/*======= filter methodu=======*/
const filteredArr = newArr.filter(item => item === 6)  // burda item her bir öğe, item === 6 ise aradığımız öğe
// birden fazla koşul verebiliyoruz.
console.log(filteredArr)   // filter her bir öğeyi tek tek denetleyip koşula uygun olanı bize dönüyor.
// filter spesifik olarak gösteriyor.

let filtering = ["ahmet", "49", "mehmet", "celil", 60];
console.log(filtering.includes("ahmet"))     // includes la arasındaki fark sorduğumuz soruya doğru veya yanlış cevap veriyordu.                                                
const newfil = filtering.filter(item => typeof item === "string")  // koşula uyan tüm elementleri döner.
console.log(newfil)

/*=========find metodu=====*/
// koşula uyan ilk elemanı döner.

const newfil2 = filtering.filter(item => item === "ahmet")
console.log(newfil2)

/*=======================map metodu================*/
// map sıfırdan bir fonksiyon döner bütün elemanları döner veya koşula uyan bütün elemanları döner filterla arasındaki fark daha çok yeni array üretmek içindir.
// filterla aralarında çok fark yok
// map yapılan işlemi dönüyor.
const newArrayim = filtering.map(item => item * 3) // bütün itemleri 3 le çarpıyor.
console.log(newArrayim)
const newArrayim2 = filtering.map(item => {
    if (typeof item === "string") {
        return item.toUpperCase();
    } else {
        return item;   // burda if içindeki dönmeyenleri döndürüyoruz.
    }
})

//her elemana işlem uygulayıp geri döner.

console.log(newArrayim2)// burda bütün string itemleri büyük harfe çeviriyoruz.
// yapılan işlemin sonucunu döner length kaç ise o kadar length döner.



const final = newArr.forEach(element => {  // burda her bir itemi her elementi return et anlamında
    return element;
});

/*=======örnek===*/
let myarrnew = ["first", 44,"repat", NaN,"second", "third", "fourth"]

const mappedArr = myarrnew.map(item => {
    if(typeof item === "string"){
        let firstChar = item.charAt(0).toUpperCase();
        let lastChars =item.substring(1);
        let result = firstChar+lastChars;
        return result;
    }else {
        return item;
    }
    
})
console.log(mappedArr)


for (let i = 0; i < mappedArr.length; i++) {   // map le farkı bütün elemanları döner uymayanları undifined döner. 

    console.log(mappedArr[i]);
    
}                                               // for ve foreach aynı

let sum3 = 0;
mappedArr.forEach(element =>{                   
   sum3+= element;
});
console.log(sum3)