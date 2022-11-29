"use strict"
/*console.log('ciao');
undefined
null
number
string
boolean
object
'' "" ``
$
tapeof
let userAge;
console.log(userAge);
const myName = 'Tati';
const myAge = 60;
const myInfo = `Ім'я: ${myName}, Вік: ${myAge}` ;

console.log(myInfo);
let num = 4;// присвоение
console.log(num);
'Учим' + 'JS';//выражение
Блок
function name() {
	console.log('Учим');
	console.log('JS');
}
name();*/

//варіант №1
console.log('Я вчу JS') 

//варіант №2
console.log('Я вчу JS') 
console.log('Вчимо JS')

//варіант №3
//console.log('Я вчу JS') console.log('Вчимо JS') не вірно. Все написано на одному рядку і не розділено `;`

//варіант №4
//console.log('Я вчу JS) 
//console.log('Вчимо JS')
//Нема закриваючщї '.
/*let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}*/
//Домашнє завдання (частина 2)
let eyeColor = "blue";
console.log(eyeColor);

let user;
let userName = "Вася";

user = userName;
console.log(user);
//завдання №3
/*Варіант 1
let user = 'Вася' let age = 36
помилка - відсутня кома, запис в  один ряд, немає ;

Варіант 2
let myage = 36; - не вірно,
не задіян стиль lowerCamelCase - кожне наступне слово з великої букви, окрім першої.

Варіант 3
const BLOCK_SIZE = 14+ 50; - вірно

Варіант 4
const BLOCK_HEIGHT = 100; - вірно

Варіант 5
*/
if (true) {
	var size = 15;	
}
console.log(size);
//Вірно.


/*Варіант №1
let userAge = 36;
let userInfo = "Фрилансер ${userAge}"; - помилка, потрібні зворотні лапки ``.*/

//Варіант №2
let userHeight = 145 / 0;
//Вернеться значення NaN - помилка. Вернеться значення - infinity
console.log(typeof userHeight);

/*Варіант №3
let userName;
Помилка. Тип даних - Undefined.
console.log(typeof userName);*/

/*Варіант №4
let userSize = "45" / "8";
Вірно. Повернеться тип даних - Number
console.log(typeof userSize);*/


