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

let date = Date;

console.log( date.parse() );