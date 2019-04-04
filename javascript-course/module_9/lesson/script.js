'use strrict';

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

class CreateTimer {
  constructor () {
    this.counter = 0, 
    this.isStart = false, 
    this.timer = null, 
    this.time = document.querySelector('.time')
  }

  handleStart = () => {
    if (!this.isStart) {
      this.timer = setInterval( () => this.time.textContent = this.counter++, 1000);
      this.isStart = true;
    }
  };

  handleStop = () => {
    clearInterval(this.timer);
    this.isStart = false;
  };
}

const t = new CreateTimer();

start.addEventListener('click', t.handleStart);
stop.addEventListener('click', t.handleStop);

// =============================================================================================

let date = new Date();

// проверим количество мс с с начала эпохи Unix
console.log(
  `Время в мс с начала эпохи Unix: ${date.getTime()}`
);
// "Время в мс с начала эпохи Unix: ....  значения будут меняться :-)
// "Время в мс с начала эпохи Unix: 1504721892483"

let result = 'Date: ';
result += date.getFullYear() + '/'; // год
result += date.getMonth() + '/'; // месяц, начиная с 0
result += date.getDate() + '. Day of the week: '; // день недели, начиная с 1
result += date.getDay() + '.'; // день , начиная с 0

result += ' Time: ' + date.getHours() + ':'; // часы
result +=  date.getMinutes() + ':'; // минуты
result +=  date.getSeconds() + ':'; // секунды
result +=  date.getMilliseconds() + ''; // милисекунды

// строка должна показать текущее время и дату
console.log(result);
//  ....  значения будут менятся :-)
// "Date: 2017/8/6. Day of week: 3. Time: 21:18:12:483"