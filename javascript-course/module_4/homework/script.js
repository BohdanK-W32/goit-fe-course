'use strict';

// Создайте скрипт кассира, который получает список продуктов и деньги, подсчитывает общую стоимость продуктов, и в зависимости от того хватает денег или нет, уведомляет покупателя о результате.

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
}; 

/* Необходимо создать функцию-конструктор Cashier.
  - name - строка, имя кассира, передается при вызове конструктора
  - productDatabase - объект база данных продуктов, передается при вызове конструктора
  - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0 
  - getCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
  - countTotalPrice(order) - метод, получает объект списка покупок, считает общую стоимость покупок.
  - countChange(totalPrice) - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
  - onSuccess(change) - метод, выводит в консоль строку Спасибо за покупку, ваша сдача ${change}!.
  - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'   
  - reset() - метод, сбрасывает поле customerMoney 0.
*/

function Cashier(name, productDatabase) {
  this.name = name, 
  this.productDatabase = productDatabase, 
  this.customerMoney = 0, 
  this.getCustomerMoney = function (value) {this.customerMoney = value}, 
  this.countTotalPrice = function (order) {
    let totalPrice = 0;
    for (const key in order) {totalPrice += order[key] * this.productDatabase[key]}
    return totalPrice;
  }, 
  this.countChange = function (totalPrice = this.countTotalPrice(order)) {
    const res = this.customerMoney >= totalPrice 
    ? this.customerMoney - totalPrice
    : null;
    return res;
  }, 
  this.onSuccess = () => console.log(`Спасибо за покупку, ваша сдача ${change} UAH!`), 
  this.onError = () => console.log('Очень жаль, вам не хватает денег на покупки.'), 
  this.reset = function () {this.customerMoney = 0}
}

/* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

const mango = new Cashier('Mango', products);

console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);
console.log(totalPrice); // 110

mango.getCustomerMoney(300);
console.log(mango.customerMoney); // 300

const change = mango.countChange();
console.log(change); // 190

change !== null 
? mango.onSuccess(change) // Спасибо за покупку, ваша сдача 190
: mango.onError(); // Очень жаль, вам не хватает денег на покупки

mango.reset();
console.log(mango.customerMoney); // 0