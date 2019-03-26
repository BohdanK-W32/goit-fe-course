'use strict';


/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

const btn = document.querySelector('.button');
let i = btn.innerHTML;
const onClickButton = () => btn.innerHTML = i++;
btn.addEventListener('click', onClickButton);


// =============================================================================================

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

const addButton = document.querySelector('.add-button');
const input1 = document.querySelector('.input-1');
const input2 = document.querySelector('.input-2');
const res = document.querySelector('.result');
const addFunc = () => res.innerHTML = +input1.value + +input2.value;

addButton.addEventListener('click', addFunc);



// =============================================================================================


/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и уменьшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

class Counter {
  constructor (onChange) {
    this.value = 0;
    this.onChange = onChange;
  }

  get increment () { this.onChange(this.value += 1) };
  get decrement () { this.onChange(this.value -= 1) };
}

const value = document.querySelector('.value');
const counter = new Counter( (res) => value.innerHTML = res );

const onClickHandler = ( {target} ) => 
  target.dataset.action === 'add' 
  ? counter.increment 
  : counter.decrement;

  document.querySelectorAll('.btn').forEach( btn => btn.addEventListener('click', onClickHandler) );



  // ===========================================================================================


  /*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

const inputs = Array.from( document.querySelectorAll('input[name="option"]') );
const form = document.querySelector('.question-form');
const resForm = document.querySelector('.res');

const radioHandler = evt => {
  evt.preventDefault();
  resForm.innerHTML = "Result: " + inputs.find( input => input.checked ).value;
}

form.addEventListener('submit', radioHandler);


// ==================================================================================================


document.addEventListener('DOMContentLoaded', () => {
  const js_btn = document.querySelector('.js-btn');
  const js_form = document.querySelector('.js-form');
  const js_input = document.querySelector('.js-input');
  const js_list = document.querySelector('.js-list');
  const js_btn_submit = document.querySelector('.js-btn-submit');

  js_form.addEventListener('submit', onSubmit);
  function onSubmit (evt) {
    evt.preventDefault();
    console.log(js_input.value);
    createLi();
    js_form.reset();
  }
  
  /* 
    *CreateLi()
    *create 'li' and append to 'ul' 
  */
  function createLi () {

    const createItem = document.createElement('li');
    createItem.textContent = js_input.value;

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('js-delete_btn');
    btnDelete.textContent = 'X';

    js_list.addEventListener('click', event => {
      if (event.target.nodeName === 'BUTTON') {
        event.target.parentNode.remove(createItem);
      }
    });

    createItem.append(btnDelete);
    js_list.append(createItem);
  }
});


// ===========================================================================================


/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

const btn_modal = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const btn_close = document.querySelector('.close-btn');
const backdrop = document.querySelector('.js-modal-backdrop');

function openModal () { modal.classList.remove('modal-hidden') }
function closeModal () { modal.classList.add('modal-hidden') }
function keyPress (e) { if(e.keyCode === 27) { closeModal() } }

document.addEventListener('keyup', keyPress )
backdrop.addEventListener('click', closeModal );
btn_close.addEventListener('click', closeModal );
btn_modal.addEventListener('click', openModal );

