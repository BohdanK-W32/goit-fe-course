'use strict';

/*
Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

// function stopwatch () {
//   const js_start = document.querySelector('.js-start');
//   const js_time = document.querySelector('.js-time');
//   const js_takeLap = document.querySelector('.js-take-lap');
//   const js_laps = document.querySelector('.js-laps');
//   const js_reset = document.querySelector('.js-reset');
//   let isActive = false;
//   let startInterval;
//   let timing = 0;

//   function startOrResume () {

//   }

//   function start() {
//     const startTime = Date.now();

//     function stopwatchTime () {
//       let deltaTime = Date.now();
//       timing = deltaTime - startTime;
//       js_time.textContent = getFormattedTime(timing);
//       if (!isActive) {
//         timing += deltaTime - startTime;
//       }
//     }

//     if (!isActive) {
//       isActive = true;
//       js_start.textContent = 'Pause';
//       startInterval = setInterval(stopwatchTime, 100);

//     } else {
//       isActive = false
//       js_start.textContent = 'Continue';
//       clearInterval(startInterval);
//     }
//   }

//   function takeLap () {
//     if (isActive) {
//       const createLi = document.createElement('li');
//       createLi.append(js_time.textContent);
//       js_laps.append(createLi);
//     }
//   }

//   function reset () {
//     location.reload();
//   }

//   function getFormattedTime(time) {
//     const date = new Date(time);
//     let zero;
//     if (date.getMinutes() < 10 && date.getSeconds() < 10) {
//       zero = 0;
//     }
//     return `${zero}${date.getMinutes()}:${zero}${date.getSeconds()}.${Math.floor(date.getMilliseconds() / 100)}`;
//   }

//   js_start.addEventListener('click', start);
//   js_takeLap.addEventListener('click', takeLap);
//   js_reset.addEventListener('click', reset);
// }

// stopwatch();

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/

class Stopwatch {
  constructor(parent) {
    this.parent = parent,
    this.js_time,
    this.js_start,
    this.js_takeLapap,
    this.js_reset,
    this.js_laps,
    this.deltaTime = null,
    this.nextTime = 0,
    this.isActive = false,
    this.interval = null,
    this.createLayout();
  }

  createLayout () {
    this.createNode('p', ['time', 'js-time'], null, '00:00.0', `${this.parent}`, 'append');
    this.createNode('button', ['btn', 'start', 'js-start'], null, 'Start', `${this.parent}`, 'append');
    this.createNode('button', ['btn', 'take-lap', 'js-take-lap'], null, 'Lap', `${this.parent}`, 'append');
    this.createNode('button', ['btn', 'reset', 'js-reset'], null, 'Reset', `${this.parent}`, 'append');
    this.createNode('ul', ['laps', 'js-laps'], null, null, `${this.parent}`, 'append');
    this.addSelectors();
    this.addClickListeners();
  }

  createNode(tag, classArr, attrObj, text, container, mode) {
    let el = document.createElement(tag); //create

    container = document.querySelector(container);

    // add class
    if (classArr !== null) {
      for (let className of classArr) {
        el.classList.add(className);
      }
    }

    //add attr
    for (let key in attrObj) {
      let hasKey = attrObj.hasOwnProperty(`${key}`);
      if (hasKey) {
        el.setAttribute(`${key}`, attrObj[key]);
      }
    }

    // add text
    el.textContent = text;
    container[mode](el);
    return el;
  }

  getFormattedTime(time) {
    const date = new Date(time);
    let zeroSec = '';
    let zeroMin = '';
    if (date.getSeconds() < 10) {zeroSec = 0};
    if (date.getMinutes() < 10) {zeroMin = 0};

    return `${zeroMin}${date.getMinutes()}:${zeroSec}${date.getSeconds()}.${Math.floor(date.getMilliseconds() / 100)}`;
  }

  start() {
    let startTime;
    if (!this.isActive) {
      startTime = Date.now();

      this.interval = setInterval(() => {
        this.deltaTime = Date.now();
        this.js_time.textContent = this.getFormattedTime(this.deltaTime - startTime);
      }, 100);
      
      this.js_start.textContent = 'Pause';
      this.isActive = true;
      
    } else if (this.isActive) {
      this.nextTime = this.deltaTime - startTime;
      // this.nextTime = startTime //- startTime;
      console.log(this.nextTime);
      clearInterval(this.interval)

      this.js_start.textContent = 'Continue';
      this.isActive = false;
    }
  }

  takeLap () { this.createNode('li', [], null, `${this.js_time.textContent}`, `${this.parent} > .js-laps`, 'append') }

  reset () {
    this.js_time.textContent = '00:00.0';
    clearInterval(this.interval);
    this.interval = null;
    this.isActive = false;
    this.js_laps.innerHTML = '';
    this.js_start.textContent = 'Start';
  }

  addSelectors() {
    this.js_time = document.querySelector(`${this.parent}  > .js-time`);
    this.js_start = document.querySelector(`${this.parent} > .js-start`);
    this.js_takeLap = document.querySelector(`${this.parent} > .js-take-lap`);
    this.js_reset = document.querySelector(`${this.parent} > .js-reset`);
    this.js_laps = document.querySelector(`${this.parent} > .js-laps`);
  }

  addClickListeners () {
    const start = this.start.bind(this);
    const takeLap = this.takeLap.bind(this);
    const reset = this.reset.bind(this);

    this.js_start.addEventListener('click', start);
    this.js_takeLap.addEventListener('click', takeLap);
    this.js_reset.addEventListener('click', reset);
  }
}

const stopwatch = new Stopwatch('.stopwatch');