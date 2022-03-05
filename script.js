
let bekhruz = 12;

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
// const a = 10;
// const b = 10;
// console.log(`если сторона a = ${a}, б = ${b}, то периметр = ${(a + b) * 2}`);

// TODO: Задание 6
// Найти X если a = 6 , b = 10; Вывести 6 + x = 10, тогда x = 5

const a = 23;
const b = 46;
console.log(`${a} + x = ${b}, тогда ${b - a}`);


// TODO: Задание 7
// Найти площадь прямоугольника, если одна сторона равняется 5, а другая 10.
// Вывести: Площадь прямоугольника со сторонами 5 и 10 равняется 50
const side1 = 15;
const side2 = 102;
console.log(`Площадь прямоугольника со сторонами ${side1} и ${side2} равняется ${side1 * side2}`);

// TODO: Задание 8
// Дан число в метрах, найти сколько будет в Сантиметрах и в Километрах
// Вывести: 500 метров в Сантиметрах:  50000
// Вывести: 500 метров в Километрах:  0.5
const c = 500;
console.log(`${c} метров в Сантиметрах: ${c * 100}`)
console.log(`${c} метров в Километрах: ${c / 1000}`)

// TODO: Задание 9
// Найти самого низкого человека и разницу между самым низким и самым высоким человеком
// Вывести: Самый низкий человек с ростом 100 см , и разница между самым высоким и низким равняется 188 - 100 = 88 см
const chel1 = 176;
const chel2 = 100;
const chel3 = 188;
let samiyVisokiy, samiyNizkiy;
if (chel1 > chel2 && chel1 > chel3) {
    console.log(`Самый больщой человек с ростом : ${chel1}`)
    samiyVisokiy = chel1;
}
else if (chel2 > chel1 && chel2 > chel3) {
    console.log(`Самый больщой человек с ростом : ${chel2}`)
    samiyVisokiy = chel2;
}
else if (chel3 > chel1 && chel3 > chel2) {
    console.log(`Самый больщой человек с ростом : ${chel3}`)
    samiyVisokiy = chel3;
}

if (chel1 < chel2 && chel1 < chel3) {
    console.log(`Самый низкий человек с ростом : ${chel1}`);
    samiyNizkiy = chel1;
}
else if (chel2 < chel1 && chel2 < chel3) {
    console.log(`Самый низкий человек с ростом : ${chel2}`);
    samiyNizkiy = chel2;
}
else if (chel3 < chel1 && chel3 < chel2) {
    console.log(`Самый низкий челоек с ростом : ${chel3}`);
    samiyNizkiy = chel3;
}

if ((chel1 < chel2 && chel1 > chel3) || (chel1 > chel2 && chel1 < chel3)) {
    console.log(`Средняя рост :  ${chel1}`);
}
else if ((chel2 < chel1 && chel2 > chel3) || (chel2 > chel1 && chel2 < chel3)) {
    console.log(`Средняя рост :  ${chel2}`);
}
else if ((chel3 < chel1 && chel3 > chel2) || (chel3 > chel1 && chel3 < chel2)) {
    console.log(`Средняя рост :  ${chel3}`);
}
console.log(`и разница между самым высоким и низким равняется ${samiyVisokiy} - ${samiyNizkiy} = ${samiyVisokiy - samiyNizkiy} см`);

// ТО ЧТО ВОЗВРАЩАЕТ TRUE ИЛИ FALSE Называется BOOLEAN
pravda = true;
nepravda = false;
console.log(10 !== 10);
if (nepravda) {
    console.log('pravda');
}
// !== - НЕ РАВНЯЕТСЯ

// Если температура погоды больше либо равно 18 и кушает мороженое, то он не болеет
// Если температура погоды меньше 18 и кушает мороженое, то он болеет
// Если он болеет, и если температура больше 38, то не ходит в школу | Он болеет у него температура 39.6, он не ходит в школу
// Если он болеет и температура меньше 38, то ходит в школу | Он болеет у него температура 37.6, он ходит в школу
// Если он не болеет , то он ходит в школу | Он не болеет, он ходит в школу
weather_temperature = 15; // Градусов
eat_morojnoe = true; // Кушает мороженое
ill = true; // Болеет
ill_temperature = 37.6;


// if (weather_temperature >= 18 && eat_morojnoe )  {
//     ill = false;
// }
// if (weather_temperature < 18 && eat_morojnoe) {
//     ill = true;
// }
// if (ill === true && ill_temperature > 38) {
//     console.log("Он болеет у него температура 39.6, он не ходит в школу");
// }
// if (ill === true && ill_temperature < 38) {
//     console.log("Он болеет у него температура 37.6, он ходит в школу")
// }
// if (ill === false) {
//     console.log("Он ходит в школу")
// }

if (weather_temperature >= 18 && eat_morojnoe )  {
    ill = false;
    console.log("Он ходит в школу")
}
if (weather_temperature < 18 && eat_morojnoe) {
    ill = true;
    if (ill_temperature > 38) {
        console.log("Он болеет у него температура 39.6, он не ходит в школу");
    }
    else {
        console.log("Он болеет у него температура 37.6, он ходит в школу")
    }
}

// Типы данных: Boolean Number (числа), String (строки)
const obj = {
    age: 12,
    name: 'Bekhruz',
    live: 'USA',
    money: 10000000,
    house: {
        street: 'Yunusabad',
        house: 26
    },
}
obj.ill = true; // Добавление переменного внутри объекта
obj.name = 'Bekhruz'; // Изменили переменное внутри объекта
obj.money = obj.money - 1000;
console.log(obj.money);
delete obj.live; // Удаляем
obj.house.street = 'Bogobod';
console.log(obj);
console.log(obj.house.street);

// TODO: Задание
// Нуриддин хочет снять 10000 денег, но он не может снять деньги потому что HamkorBank имеет ограничение в 5000
// Нуриддин хочет снять 5000, он снял у HamkorBank 5000 денег, у HamkorBank осталось 45000

// Bank = {}
// Nuriddin = {}

const bank = {
    name: 'Buyuk Ipak Yoli Bank',
    cash: 100000,
    ogranichenie: 50000,
};
const obj2 = {
    name: 'Bekhruz',
    cash: 10000,
    xochet_snyat: 40000,
};
console.log(bank);
console.log(obj2);
if (obj2.xochet_snyat > bank.ogranichenie) {
    console.log(`${obj2.name} хочет снять ${obj2.xochet_snyat} денег, но он не может снять деньги потому что ${bank.name} имеет ограничение в ${bank.ogranichenie}`);
}
if (obj2.xochet_snyat <= bank.ogranichenie) {
    bank.cash = bank.cash - obj2.xochet_snyat;
    obj2.cash = obj2.cash + obj2.xochet_snyat;
    console.log(`${obj2.name} хочет снять ${obj2.xochet_snyat}, он снял у ${bank.name} ${obj2.xochet_snyat} денег, у ${bank.name} осталось ${bank.cash}`)
    obj2.xochet_snyat = 0;
}

// Объекты

const obj3 = {}; // Создание объекта  {}
obj3.perviy = "perviy"; // Создание нового параметра
obj3.obj = {dela: 'horosho'};  // Создание нового параметра в виде объекта
const obj4 = {
    name: 'Bekhruz',
    family_name: 'Akbarov',
};
delete obj4.family_name; // Удаление параметров объекта
console.log(obj3);
console.log(obj4);

const family = {
    car: 'Cobalt',
    house: '2',
    sister: '1',
    brothers: '2',
    parents: '2',
    internet: '2',
    piano: '1',
    Nuriddin_uchitel: '2',
    Nuriddin_uchitel1: '1',
    Nuriddin_uchitel2: '1',
};

// number; text; обьект; Boolean(true, false) ;

const num = 2;
const text = 'asdasd';
const bool = true;
const bool2 = false;

const obj5 = {
    number: 5,
    text: 'Nuriddin',
    boolean: true,
    obj5: {car2: 'dwqewe1231'},
    obj: {car: 'dasdasd'},
}

// СОЗДАТЬ ОБЪЕКТ FAMILY2 У КОТОРОГО ЕСТЬ:
// Машины (Число)
// Где они живут (Live) - Tashkent (TEXT)
// Это права (isTrue) true, false
// ОБЪЕКТ: members  (мама, папа, брат, Нуриддин) и у каждого membera должны быть параметры: Имя Возраст
const family2 = {
    car3: 2,
    live: 'Tashkent',
    prava: true,
    members: {
        mama: {
            name: 'Nodira',
            age: 37,
        },
        papa: {
          name: 'Ulugbek',
          age: 38,
        },
        brat: {
            name: 'Bekzod',
            age: 2.5,
        },
        nuriddin: {
          name: 'Nuriddin',
          age: 25,
        },
        sestra: {
            name: 'Charos',
            age: 11,
        },
    }
 }

console.log(family2)