'use strict';

const url = 'http://localhost:3000/students';
const btnGet = document.querySelector('[name=get]');
const btnAdd = document.querySelector('[name=add]');
const btnUpdate = document.querySelector('[name=update]');
const btnRemove = document.querySelector('[name=remove]');

const generateTable = (name, surname, amountHW) => {
  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdSurname = document.createElement('td');
  const tdHW = document.createElement('td');
  
  tdName.textContent = name;
  tdSurname.textContent = surname;
  tdHW.textContent = amountHW;

  tr.append(tdName, tdSurname, tdHW);
  tbody.append(tr);
};

const getStudents = () => 
  fetch(url)
  .then(response => response.json())
  .then(data => data.map(el => generateTable(el.first_name, el.last_name, el.homeworks)))
  .catch(err => console.log(err));

const AddStudent = () => {

  const newStudent = {
    first_name: prompt('Enter student\'s name:'), 
    last_name: prompt('Enter student\'s surname:'), 
    homeworks: prompt('Enter student\'s homework amount:')
  }

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(newStudent),
    headers: {"Content-type": "application/json; charset=UTF-8"},
  })
  .catch(err => console.log(err));  
};

const updateStudent = () => {
  let id = prompt('Which student do you want to change?');

  const updatedStudent = {
    first_name: prompt('Enter student\'s name:'), 
    last_name: prompt('Enter student\'s surname:'), 
    homeworks: prompt('Enter student\'s homework amount:')
  }

  return fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedStudent),
    headers: {"Content-type": "application/json; charset=UTF-8"},
  }).catch(err => console.log(err));  
};

const removeStudent = () => {
  let id = prompt('Which student do you want to remove?');
  return fetch(`${url}/${id}`, {method: 'DELETE'}).catch(err => console.log(err));  
};

btnGet.addEventListener('click', getStudents);
btnAdd.addEventListener('click', AddStudent);
btnUpdate.addEventListener('click', updateStudent);
btnRemove.addEventListener('click', removeStudent);