'use strict';

// Variables

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let pass;
const noPass = 'Вы не ввели пароль! Попробуйте ещё раз.';
const noAttempts = "У вас закончились попытки, аккаунт заблокирован!";
const wrongPass = 'Неверный пароль, у вас осталось попыток: ';
const enterPass = 'Введите пароль:';
const welcome = 'Добро пожаловать!';

// Loop of check a password

do {
    pass = prompt(enterPass);
    if (passwords.includes(pass) === true) {
        alert(welcome);
        break;
    } else if (pass === '') {
        alert(noPass);
    } else if (pass === null) {
        break;
    } else if (attempts === 1) {
        alert(noAttempts);
        break;
    } else if (passwords.includes(pass) === false) {
        attempts -= 1;
        alert(wrongPass + attempts);
    }
} while (attempts > 0);