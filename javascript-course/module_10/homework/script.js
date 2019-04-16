'use strict';

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

class RESTdatabase {
  constructor () {
    this._database = 'https://test-users-api.herokuapp.com/users/',
    this._getBtn = document.querySelector('#get-db'),
    this._getUserBtn = document.querySelector('#get-user'),
    this._addUserBtn = document.querySelector('#add-user'),
    this._updateUserBtn = document.querySelector('#update-user'),
    this._removeUserBtn = document.querySelector('#remove-user'),
    this.addEventListeners();
  }

  get database () {return this._database};
  get getBtn () {return this._getBtn};
  get getUserBtn () {return this._getUserBtn};
  get addUserBtn () {return this._addUserBtn};
  get updateUserBtn () {return this._updateUserBtn};
  get removeUserBtn () {return this._removeUserBtn};

  getAllUsers () {

    fetch(this.database, {
      method: 'GET',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then( data => {
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
      const tr = document.createElement('tr');
      const thName = document.createElement('th');
      const thAge = document.createElement('th');
      const thID = document.createElement('th');

      thName.textContent = 'Name';
      thAge.textContent = 'Age';
      thID.textContent = 'ID';

      tr.append(thName, thAge, thID);
      thead.appendChild(tr);

      data.data.map( el => {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdAge = document.createElement('td');
        const tdID = document.createElement('td');

        tdAge.style.textAlign = 'center';

        tdName.textContent = el.name;
        tdAge.textContent = el.age;
        tdID.textContent = el.id;

        tr.append(tdName, tdAge, tdID);
        tbody.appendChild(tr);
      } );
      table.append(thead, tbody);
      document.body.appendChild(table);
    } )
    .catch(err => console.log(err));
  }

  getUserById () {
    const id = prompt('Enter user ID');
    fetch( `${this.database}${id}`, {method: 'GET'} )
    .then( response => response.json() )
    .then(data => {

      if ( data.status === 200 && id !== '' ) {
        console.log(data.data);
        alert('User data is displayed in the console! \nPress \"F12\" to open console.');
      } else alert('User not found!');
      
    })
    .catch( err => console.log(err) );
  }

  addUser () {
    const newUser = {
      name: prompt('Enter name of new user: '),
      age: prompt('Enter age of new user: ')
    };

    fetch(this.database, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .catch( err => console.log(err) );
  }

  removeUser () {
    const id = prompt('Enter user ID');
    fetch( `${this.database}${id}`, {method: 'DELETE'} )
    .then(data => {
      if ( data.status === 200 && id !== '' ) {
        console.log(data);
        alert('User have been successfully removed.');
      } else {
        alert('User not found!');
      }
    })
    .catch( err => console.log(err) );
  }

  updateUser (user) {
    const id = prompt('Enter user ID');
    const dataToUpdate = {
      name: prompt('Enter new name of user: '),
      age: prompt('Enter new age of user: ')
    };
    
    fetch( `${this.database}${id}`, {
      method: 'PUT',
      body: JSON.stringify(dataToUpdate),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then( response => response.json())
    .then( data => {
      if ( data.status === 200 && id !== '' ) {
        alert('User have been successfully updated.');
      } else {
        alert('User not found!');
      }
    } )
    .catch( err => console.log(err));
  }

  addEventListeners () {
    const $this = this;
    this.getBtn.addEventListener( 'click', this.getAllUsers.bind($this) );
    this.getUserBtn.addEventListener( 'click', this.getUserById.bind($this) );
    this.addUserBtn.addEventListener( 'click', this.addUser.bind($this) );
    this.updateUserBtn.addEventListener( 'click', this.updateUser.bind($this) )
    this.removeUserBtn.addEventListener('click', this.removeUser.bind($this) );
  }
}

new RESTdatabase();