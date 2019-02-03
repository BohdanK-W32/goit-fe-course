'use strict';

let sharm = 15;
let hurgada = 25;
let taba = 6;
let groupSharm = 'sharm';
let groupHurgada = 'hurgada';
let groupTaba = 'taba';
let places = 'Есть место в групе ';
let noPlaces = 'Извините, столько мест нет ни в одной группе!';
let doYouWant = ' Согласны ли Вы быть в этой групе?';
let okGroup = 'Приятного путешествия в группе: ';
let userNumber = prompt('Введите число необходимых мест');
let intCheck = Number.parseInt(userNumber);
const enterError = 'Ошибка ввода';
const comeAgain = 'Нам очень жаль, приходите еще!';

if (userNumber === null) {
    alert(comeAgain);
} else if (isNaN(userNumber) === true || userNumber < 1 || userNumber === intCheck) {
    alert(enterError);
} else if (userNumber > sharm && userNumber > hurgada && userNumber > taba) {
    alert(noPlaces);
} else {
    if (userNumber <= sharm && userNumber > taba) {
        let isSharm = confirm(`${places} ${groupSharm} . ${doYouWant}`);
        if (isSharm === true) {
            alert(`${okGroup} ${groupSharm}`);
        } else {
            alert(comeAgain);
        }
    } else if (userNumber === false) {
        alert(noPlaces);
    }

    if (userNumber <= hurgada && userNumber > sharm) {
        let isHurgada = confirm(`${places} ${groupHurgada} . ${doYouWant}`);
        if (isHurgada === true) {
            alert(`${okGroup} ${groupHurgada}`);
        } else {
            alert(comeAgain);
        }
    } else if (userNumber === false) {
        alert(noPlaces);
    }

    if (userNumber <= taba && userNumber < taba++) {
        let isTaba = confirm(`${places} ${groupTaba} . ${doYouWant}`);
        if (isTaba === true) {
            alert(`${okGroup} ${groupTaba}`);
        } else {
            alert(comeAgain);
        }
    } else if (userNumber === false) {
        alert(noPlaces);
    }
}