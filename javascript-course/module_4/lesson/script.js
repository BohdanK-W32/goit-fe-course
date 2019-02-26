// function getUserInfo (name, age, friends) {
//      console.log(`User ${name} is ${age} years old and has ${friends}`) 
// }
// function UserCreate (name, surname, age, friends) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.friends = friends;
//     this.userInfo = function (name, age, friends) {
//         console.log(`User ${name} is ${age} years old and has ${friends} friends`);   
//    }
// }
// const user = new UserCreate('Angela', 'Mercel\'', 61, 5);
// console.log(user.userInfo('donald24', 24, 6));

// function Shop({ phonesArr = [] }) {
//     this.phones = phonesArr;
//     this.addPhone = function (phone) {
//         this.phonesArr.push(phone);
//     };
//     this.findPhone = function (phoneName) {
//         for(const el of this.phones) {
//             if (el.name = phoneName) {
//                 return el;
//             }
//         }
//     };
//     this.addPhoneAmount = function (phone, num) {
//         console.log(Adding ${num} ${phone});
//         const product = this.findPhone(phone);
//         product.amount += num;
//     };
//     this.substractPhoneAmount = function (phone, num) {
//         console.log(Adding ${num} ${phone});
//         const product = this.findPhone(phone);
//         product.amount -= num;
//     };
//     this.getAllPhones = function() {
//         return this.phones;
//     }
// }
// const phonesArr = [
//     { name: 'IPhone', amount: 10, price: 700 }, 
//     { name: 'Sony', amount: 6, price: 240 }, 
//     { name: 'Xiaomi', amount: 14, price: 180 }, 
// ];
// const shopA = new Shop({phonesArr});