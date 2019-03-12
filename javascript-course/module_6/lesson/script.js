'use strict';

/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/




/* ====================================   C l a s s   ==================================== */


/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
    - геттер value - возвращает текущее значение поля _value
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

class StringBuilder {
  constructor (string) {
    this._value = string;
  }
  get value () {
    return this._value;
  }
  append (str) {
    this._value = str + this._value;
  }
  prepend (str) {
    this._value += str;
  }
  pad (str) {
    this._value = str + this._value + str;
  }
}
const builder = new StringBuilder('.');

builder.append('^'); 
console.log(builder.value); // '.^'

builder.prepend('^'); 
console.log(builder.value); // '^.^'

builder.pad('='); 
console.log(builder.value); // '=^.^='

/*
 * Напиши класс Car с указанными свойствами и методами
*/

class Car {
  constructor({maxSpeed = 0, price = 40000}) {
    this.speed = 0, 
    this.maxSpeed = maxSpeed, 
    this.running = false, 
    this.distance = 0, 
    this._price = price
  }

  get price () {
    return this._price;
  }

  set price (value) {
    this._price = value;
  }

  turnOn() {
    this.running = true;
  }

  turnOff() {
    this.running = false;
  }

  accelerate(spd) {
    if (spd <= this.maxSpeed) {
      this.speed = spd;
    }
  }

  decelerate(spd) {
    if (spd >= 0 && spd <= this.maxSpeed) {
      this.speed = spd;
    }
  }

  drive(hours) {
    if (this.running === true) {
      this.distance = this.speed * hours;
    }
  }

  static getSpecs(Car) {
    console.log(Car);
  }
}

const car = new Car({ maxSpeed: 455, price: 500000});
console.log(car);

car.turnOn();
console.log(car.running);

car.accelerate(387);
console.log(`${car.speed} km`);

car.decelerate(135);
console.log(`${car.speed} km`);

car.drive(34);
console.log(`${car.distance} km`);

car.turnOff();
console.log(car.running);




/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/
car.turnOn();
car.accelerate(50);
car.drive(2);

Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100




/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/

console.log(car.price); // 2000

car.price = 4000;
console.log(car.price); // 4000
