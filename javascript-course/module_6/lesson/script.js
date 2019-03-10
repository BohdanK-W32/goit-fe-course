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

function Account (login, email) {
    this.login = login, 
    this.email = email
}
Account.prototype.getInfo = function () {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
};
Account.prototype.sumAmount = function (value) {
    const sum = this.login;
    console.log(sum.repeat(value));
}
const account = new Account('Mangozedog', 'mango@dog.woof');
const acc = new Account('zis iz', 'mango@dog.woof');
console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
acc.sumAmount(7);

let DB = [
    {name: 'Xiaomi', amount: 46, price: 320}, 
    {name: 'Sony', amount: 12, price: 500}, 
    {name: 'Samsung', amount: 43, price: 700}, 
    {name: 'Nokia', amount: 109, price: 200}, 
    {name: 'iPhone', amount: 31, price: 950}
];

function Shop (name, price, distance, isDrive = true) {
    this.name = name, 
    this.price = price, 
    this.distance = distance, 
    this.isDrive = isDrive
}

const rozetka = new Shop('BMW', 8000, 35000);

Shop.prototype.addDistance = function (dist) {
    this.distance += dist
}

Shop.prototype.isCanDrive = function (max) {
    (this.distance > max) ? this.isDrive = false : this.isDrive = true;
}

rozetka.addDistance(2000);
console.log(rozetka.distance);

rozetka.isCanDrive(38000);
console.log(rozetka.isDrive);

rozetka.isCanDrive(3000);
console.log(rozetka.isDrive);