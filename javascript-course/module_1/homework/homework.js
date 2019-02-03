'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const wrongLogin = 'Доступ запрещен, неверный логин!';
const wrongPassword = 'Доступ запрещен, неверный пароль!';
const cancel = 'Отменено пользователем!';
const welcome = 'Добро пожаловать!';
let login;
let pass = null;

login = prompt('Login:');

if (login === null) {
    alert(cancel);
} else if (login === adminLogin) {
    pass = prompt('Password:')

    if (pass === null) {
        alert(cancel);
    } else if (pass === adminPassword) {
        alert(welcome);
    } else {
        alert(wrongPassword);
    }
} else {
    alert(wrongLogin);
}
