
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


// TODO: ЗАДАНИЕ
// Вывести : Cherry больше чем Apple на 5 штук
const apple = 20;
const cherry = 20;

if (apple > cherry) {
    console.log(`Apple больше на ${apple-cherry}`);
}else if (cherry > apple) {
    console.log(`Cherry больше на ${cherry-apple}`);
}else {
    console.log("Оба равны");
}

// TODO: Задание 2
// Найти среднию дистанцию, вывести: Средняя дистанция 2000
const distance1 = 2500;
const distance2 = 2900;
const distance3 = 2600;
if ((distance1 < distance2 && distance1 > distance3) || (distance1 > distance2 && distance1 < distance3)) {
    console.log(`Средняя дистанция  ${distance1}`);
}
if ((distance2 < distance1 && distance2 > distance3) || (distance2 > distance1 && distance2 < distance3)) {
    console.log(`Средняя дистанция ${distance2}`);
}
if ((distance3 < distance1 && distance3 > distance2) || (distance3 > distance1 && distance3 < distance2)) {
    console.log(`Средняя дистанция ${distance3}`);
}


// TODO: Задание 3
// Найти сумму двух чисел, деление , умножение, вычитание.
const num1 = 50;
const num2 = 25;
console.log(`${num1} + ${num2} = ${num1 + num2}`)
console.log(num1 + " + " + num2 + " = " + (num1 + num2))
console.log(`${num1} - ${num2} = ${num1 - num2}`)
console.log(`${num1} * ${num2} = ${num1 * num2}`)
console.log(`${num1} / ${num2} = ${num1 / num2}`)


// TODO: Задание 4
const num3 = 4;
// Найти квадрат числа, вывести: Квадрат числа 10 будет 100

console.log(`Квадрат числа ${num3} будет ${num3 * num3}`);

// TODO: Задание 5
// Найти периметр прямоугольника. Вывести: Если сторона а = 5, а сторона b = 10, то периметр = 30;
const a = 10;
const b = 10;
console.log(`если сторона a = ${a}, б = ${b}, то периметр = ${(a + b) * 2}`);

// TODO: Задание 6
// Найти X если a = 5 , b = 10; Вывести 5 + x = 10, тогда x = 5

