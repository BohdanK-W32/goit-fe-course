// let counter = 0; 

// while (counter <= 10) {
//     alert(counter);
//     counter += 1;
// }

// do {
//     console.log(counter);
//     counter += 1;
// } while (counter < 10);

// const clients = ['Mango', 'Ajax', 'Poly'];
// for(let i = 0, max = clients.length; i < max; i += 1) {
//   console.log(clients[i]);
// }

// const numbers = [1, 3, 4, 10, 22, 12, 3];
// const newArr = [];
// const newArr2 = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         newArr.push(numbers[i]);
//     } else {
//         newArr2.push(numbers[i]);
//     }
// }
// console.log(numbers);
// console.log(newArr);
// console.log(newArr2);

// let newArr = [];
// for (let i = 0; i < newArr.length; i++) {
//     const index = newArr[i];
// }

// let task;
// do {
//     task = Number(prompt('Enter number more then 100: ')); 
// } while (task < 100 && task !== null);
// console.log(task);

// const min = 1;
// const max = 100;
// for (let i = 0; i < max; i++) {
//     const element = max;
// }

/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/
// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArr = [];
// for (let i of numbers) {
//     if (i > num) {
//         newArr.push(i);
//     }
// }
// console.log(newArr);