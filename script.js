
let bekhruz = 13;

//  if   -  если
// Сравнения: ==,  ===, >, <, >=, <=

// СРАВНЕНИЕ ВСЕГДА ВОЗРАЩАЕТ ЛИБО TRUE ЛИБО FALSE

console.log(bekhruz == 12);
console.log(bekhruz === 12);

console.log(bekhruz == '12');
console.log(bekhruz === '12');

console.log('Больше', bekhruz > 11);
console.log('Меньше', bekhruz < 15);

console.log('Больше либо равно', bekhruz <= 12);
console.log('Меньше либо равно', bekhruz <= 12);

// console.log('', bekhruz = 12); // Не СРАВНЕНИЕ


if (bekhruz > 12) {
    console.log('Бехрузу больше 12 лет')
}
if (bekhruz < 12) {
    let b = 12;
    console.log('Бехрузу меньше 12 лет')
}

// && - and И
// || - or ИЛИ

console.log('Использование И', 12 === 12 && 12 === 13);
console.log('Использование ИЛИ', 12 === 12 || 12 === 13);

// НУЖНО ВЫВЕСТИ БЕХРУЗ БОЛЬШЕ 18 ЛЕТ , РАВНЯЕТСЯ 18 лет, МЕНЬШЕ 18 лет

let bekhruz2
bekhruz2 = 19;
if (bekhruz2 === 18) {
    console.log("БЕХРУЗ РАВНЯЕТСЯ 18 ЛЕТ")
}
if (bekhruz2 > 18) {
    console.log("БЕХРУЗ БОЛЬШЕ 18 ЛЕТ")
}
if (bekhruz2 < 18) {
    console.log("БЕХРУЗ МЕНЬШЕ 18 ЛЕТ")
}


// == - равенство  === - строгое равенство


let mersedes = 9220000;
let tesla = 12033333000;

if(mersedes > tesla) {
    console.log(`Мерседес дороже чем тупая тесла! на ${mersedes - tesla}$`)
} else if (mersedes === tesla) {
    console.log('Оба равны')
} else { // ELSE ВСЕГДА В КОНЦЕ
    console.log(`Крутая тесла дороже чем Мерседес на  ${tesla - mersedes}$яв`)
}

// '' "" ``
// `` - внутри чтобы записать переменную нужно: ${}

const tashkent = 35;
const moskva = 20;
const newYork = 0;
let cold, hot;
if (tashkent > moskva && tashkent > newYork) {
    hot = tashkent;
    console.log('Самая теплая погода : Ташкент')
}
else if (moskva > tashkent && moskva > newYork) {
    hot = moskva;
    console.log('Самая теплая погода : Москва')
} else if (newYork > tashkent && newYork > moskva) {
    hot = newYork;
    console.log('Самая теплая погода : New York')
}

if (tashkent < moskva && tashkent < newYork) {
    cold = tashkent;
    console.log('Самая холодная погода : Tashkent')
}
if (moskva < tashkent && moskva < newYork) {
    cold = moskva;
    console.log('Самая холодная погода : Москва')
}
if (newYork < tashkent && newYork < moskva) {
    cold = newYork;
    console.log('Самая холодная погода : NewYork')
}

console.log(`Разница между самой теплым городом и самым холодным: ${hot - cold}`)

if ((newYork < tashkent && newYork > moskva) || (newYork > tashkent && newYork < moskva)) {
    console.log("Самый средняя температура в городе : NewYork");
}
if ((tashkent < newYork && tashkent > moskva) || (tashkent > newYork && tashkent < moskva)) {
    console.log("Самый средняя теипература в городе : Tashkent");
}
if ((moskva < tashkent && moskva > newYork) || (moskva > tashkent && moskva < newYork)) {
    console.log("Самая средняя температура в городе : Москве");
}

// Самая средняя погода : Ташкент
// Разница между самой теплым городом Ташкент и самым холодным городом Нью Йорк: 40

