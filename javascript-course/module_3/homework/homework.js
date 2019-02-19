'use strict';

// All logins
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// check login (valid)
const isLoginValid = (login) => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

// Check login (unique)
const isLoginUnique = (allLogins, login) => {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

// Adding login to 'logins'
const addLogin = (allLogins, login) => {
  if (isLoginValid(login)) {
    if (isLoginUnique(logins, login)) {
      allLogins.push(login);
      console.log('Логин успешно добавлен!');
    } else {
      console.log('Такой логин уже используется!');
    }
  } else {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// Logins
console.log(logins);