'use strict';

let secc = document.querySelector('.seconds');
let minn = document.querySelector('.minutes');
let hourss = document.querySelector('.hours');
let dayss = document.querySelector('.days');

const howManyTimeToNewYear = () => {
  let deadline = new Date(2020, 0, 1);
  
  const timer = () => {
    let now = Date.now();
    let res = Number.parseInt ( deadline - now );
    let sec = Number.parseInt( res / 1000 );
    let min = Number.parseInt( sec / 60 );
    let hours = Number.parseInt( min / 60 );
    let days = Number.parseInt( ( deadline - Date.now() ) / 60000 / 60 / 24 );

    dayss.textContent = days;
    hourss.textContent = hours % 24;
    minn.textContent = min % 24;
    secc.textContent = sec % 60;
  };

  setInterval(timer, 1000);
};

howManyTimeToNewYear();