'use strict';

let sharm = 15;
let hurgada = 25;
let taba = 6;
let userNumber = prompt('Введите число необходимых мест');
const enterError = 'Ошибка ввода';
const comeAgain = 'Нам очень жаль, приходите еще!';

if (userNumber === null){
    alert(comeAgain);
} else if (isNaN(userNumber) === true || userNumber < 1){
    alert(enterError);
} else{
    // 
}