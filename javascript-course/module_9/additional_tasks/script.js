'use strict';

let date = new Date();
console.log("Date: " + date);
console.log("getDate(): " + date.getDate());
console.log("getDay(): " + date.getDay());
console.log("getMonth(): " + date.getMonth());
console.log("getFullYear(): " + date.getFullYear());
console.log("getHours(): " + date.getHours());
console.log("getMinutes(): " + date.getMinutes());
console.log("getSeconds(): " + date.getSeconds());
console.log("getMilliseconds(): " + date.getMilliseconds());
console.log("getTime(): " + date.getTime());

// =================================== Add. task 1 ===================================

/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
*/

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const changeBodyBackgroundColor = (arrOfColors) => {
  const startBtn = document.querySelector('[data-action=start]');
  const stopBtn = document.querySelector('[data-action=stop]');
  let isActive = false;
  let interval;

  const backgroundColorChanger = () => {
    if (!isActive) {
      interval = setInterval(() => {
        let random = Math.round(Math.random() * 6);
        document.body.style.backgroundColor = arrOfColors[random];
      }, 1000);
      isActive = true;
    }
  };
  const stopBackgroundColorChanger = () => {
    clearInterval(interval);
    isActive = false;
  };

  startBtn.addEventListener('click', backgroundColorChanger);
  stopBtn.addEventListener('click', stopBackgroundColorChanger);
};

changeBodyBackgroundColor(colors);


// =================================== Add. task 2 ===================================


/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

function getFormattedTime(time) {
  const date = new Date(time);
  return `${date.getMinutes()}:${date.getSeconds()}.${Math.floor(date.getMilliseconds() / 100)}`;
}

console.log( getFormattedTime(1523621052858) ); // 04:12.8
console.log( getFormattedTime(1523621161159) ); // 06:01.1
console.log( getFormattedTime(1523621244239) ); // 07:24.2


// =================================== Add. task 3 ===================================


/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/


function createTimer() {
  const timer = {
    startTime: null,
    deltaTime: null,
    id: null
  };
  const clockface = document.querySelector(".js-clockface");
  const startBtn = document.querySelector(".js-timer-start");
  const stopBtn = document.querySelector(".js-timer-stop");
  let timerInterval;

  function getFormattedTime(time) {
    const date = new Date(time);
    return `${date.getMinutes()}:${date.getSeconds()}.${Math.floor(date.getMilliseconds() / 100)}`;
  }
  
  function startTimer () {
    const time = Date.now();
    timer.startTime = time;
    timer.id = setInterval( () => {
      timer.deltaTime = Date.now();
      clockface.textContent = getFormattedTime(timer.deltaTime - timer.startTime);
    }, 100);
  }
  
  function stopTimer () {clearInterval(timer.id)}

  startBtn.addEventListener('click', startTimer);
  stopBtn.addEventListener('click', stopTimer);
}


createTimer();

