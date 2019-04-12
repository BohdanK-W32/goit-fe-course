'use strict';

function todo () {
  const todoList = document.querySelector('.todo-list');
  const btn = document.querySelector('.btn');
  const input = document.querySelector('.input');

  start();
  function start(e) {
    e.preventDefault();
    btn.addEventListener('submit', addElem);
  }
  

  function addElem (e) {
    const li = document.createElement('li');
    li.textContent = input.value;
    todoList.append(li);
  }
}


todo(); 