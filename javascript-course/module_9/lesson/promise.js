'use strict';

const fn = num => {
  !!(num % 2)
  ? console.log('object') 
  : console.log('obj');
};

const promise = new Promise((resolve, reject) => {
  setTimeout( () => {
    resolve(fn(2));
    reject(fn(5));
  }, 1000);
});

const onSuccess = console.log('resolved');
const onReject = console.log('rejected');

console.log(promise);

let DIST = 2300;

const car = (name, speed) => new Promise (resolve => {
  setTimeout( () => {
    resolve(`${name} crossed the finish line!`);
  }, ((DIST / speed) * 100))
})

const maserati = car ('Maserati', 320).then(data => console.log(data));