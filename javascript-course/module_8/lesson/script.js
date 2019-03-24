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