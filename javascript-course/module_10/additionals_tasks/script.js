// ======================================== Add. task 1 ========================================

/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

function country () {
  const API_URL = "https://restcountries.eu/rest/v2/name/";
  const form    = document.querySelector(".country .search-form");
  const input   = document.querySelector(".country input");
  const result  = document.querySelector(".country .result");

  form.addEventListener("submit", fetchCountryData);
  /*
    @param {FormEvent} evt
  */
  function fetchCountryData(evt) {
    evt.preventDefault();
    
    const addDataToResult = data => {
    result.innerHTML = '';

    const name       = document.createElement('h2');
    const nativeName = document.createElement('h2');
    const capital    = document.createElement('h3');
    const flag       = document.createElement('img');
    const data0      = data[0];

    name.textContent = `Country name: ${data0.name}`;
    nativeName.textContent = `Native country name: ${data0.nativeName}`;
    capital.textContent = `Capital: ${data0.capital}`;
    flag.setAttribute('src', `${data0.flag}`);

    result.append(name, nativeName, capital, flag);
  };

  fetch(`${API_URL}${input.value}`, {method: 'GET'})
  .then( response => response.json() )
  .then( data => addDataToResult(data) );
  }
}

country();

// ======================================== Add. task 2 ========================================

/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

function user () {
  const input   = document.querySelector(".user input");
  const form    = document.querySelector(".user .search-form");
  const result  = document.querySelector(".user .result");
  const API_URL = "https://api.github.com/users/";

  form.addEventListener("submit", fetchUserData);

  /*
    @param {FormEvent} evt
  */
  function fetchUserData(evt) {
    evt.preventDefault();

    const addDataToResult = data => {
      result.innerHTML = '';

      const avatar = document.createElement('img');
      const username = document.createElement('h2');
      const bio = document.createElement('p');
      const public_repos = document.createElement('p');

      avatar.setAttribute('src', data.avatar_url);
      username.textContent = data.login;
      bio.textContent = data.bio;
      public_repos.textContent = `Number of repositories: ${data.public_repos}`;

      result.append(avatar, username, bio, public_repos);
    };
    
    fetch(`${API_URL}${input.value}`, {method: 'GET'})
    .then( response => response.json() )
    .then( data => addDataToResult(data) );
  }
}

user();

// ======================================== Add. task 3 ========================================

/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/
function tableOfUsers () {
  
  const form = document.querySelector(".search-form");
  const userTable = document.querySelector(".users-table");

  form.addEventListener("submit", fetchUsers);

  /*
    @param {FormEvent} evt
  */
  function fetchUsers(evt) {
    evt.preventDefault();


    const createTable = data => {

    }
  }
}