const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(book.title); // "The Last Kingdom" 
console.log(book["title"]); // "The Last Kingdom" 

console.log(book.genres); // ["historical prose", "adventure"]
console.log(book["genres"]); // ["historical prose", "adventure"]

const propKey = "author";
console.log(book.propKey); // undefined
console.log(book[propKey]); // "Bernard Cornwell"




book.rating = 9;
book.isPublic = false;
book.genres.push("drama");
console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]


const keys = Object.keys(book);
console.log(keys); // ["title", "author", "rating"]
const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

// const numbers = [5,10,15,20,30];
// const filterNumbers = numbers.filter((number)=>number<20)
// const filterNumbers1 = numbers.filter((number)=>number>=20)
// console.log(filterNumbers);
// console.log(filterNumbers1);

const allCars = [
    {
      make: "Honda",
      model: "CR-V",
      type: "suv",
      amount: 14,
      price: 24045,
      onSale: true,
    },
    {
      make: "Honda",
      model: "Accord",
      type: "sedan",
      amount: 2,
      price: 22455,
      onSale: true,
    },
    {
      make: "Mazda",
      model: "Mazda 6",
      type: "sedan",
      amount: 8,
      price: 24195,
      onSale: false,
    },
    {
      make: "Mazda",
      model: "CX-9",
      type: "suv",
      amount: 7,
      price: 31520,
      onSale: true,
    },
    {
      make: "Toyota",
      model: "4Runner",
      type: "suv",
      amount: 19,
      price: 34210,
      onSale: false,
    },
    {
      make: "Toyota",
      model: "Sequoia",
      type: "suv",
      amount: 16,
      price: 45560,
      onSale: false,
    },
    {
      make: "Toyota",
      model: "Tacoma",
      type: "truck",
      amount: 4,
      price: 24320,
      onSale: true,
    },
    {
      make: "Ford",
      model: "F-150",
      type: "truck",
      amount: 11,
      price: 27110,
      onSale: true,
    },
    {
      make: "Ford",
      model: "Fusion",
      type: "sedan",
      amount: 13,
      price: 22120,
      onSale: true,
    },
    {
      make: "Ford",
      model: "Explorer",
      type: "suv",
      amount: 6,
      price: 31660,
      onSale: false,
    },
  ];
  
  
  //  * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
  //  * значення параметра threshold.

  const filterByPrice = (cars, threshold)=> cars.filter((car)=>car.price<threshold)

  console.table(filterByPrice(allCars, 30000));
console.table(filterByPrice(allCars, 25000));

// getCarsOnSale повертає масив автомобілів
//  * властивість onSale яких true.
 

const getCarsOnSale =(cars)=> cars.filter((car)=>car.onSale)
console.table(getCarsOnSale(allCars));

// функція getCarsWithType повертає масив автомобілів тип яких збігається
//  * зі значенням параметра type.
//  */

const getCarsWithType = (cars, type)=> cars.filter((car)=>car.type===type)

console.table(getCarsWithType(allCars, 'suv'));
console.table(getCarsWithType(allCars, 'sedan'));

// ===================================================================

// * Метод find

// * - Поелементно перебирає оригінальний масив
// * - Повертає перший елемент, що задовольняє умові або undefined


const numbers = [5, 7, 8, 10, 60, 15, 20, 25];

const number= numbers.find((number)=> number % 2 === 0 && number % 5 ===0)
console.log(number);

const allCars2 = [
   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
   { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
   { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
  ];
  
  /**
  * Шукаємо машину за моделлю
  */
  const getCarByModel = (cars, model)=> cars.find((car)=>car.model===model)

  console.log(getCarByModel(allCars2, "F-150"));
console.log(getCarByModel(allCars2, "CX-9"));
console.log(getCarByModel(allCars2, "Cayenne"));

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 490, points: 92, online: false },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: false },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];

/**
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */

const isAllOnline = players.every((player)=>player.online)
console.log("isAllOnline:", isAllOnline);

/**
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */

const isAnyOnline = players.some((player)=>player.online)
console.log("isAnyOnline:", isAnyOnline);

const anyHardcorePlayers= players.some((player)=>player.timePlayed>=400)
console.log("anyHardcorePlayers:", anyHardcorePlayers);

// * Метод reduce
//  *
//  * - Поелементно перебирає оригінальний масив
//  * - Значення, що повертається, залежить від розробника
//  */

const numbers2 = [5, 10, 15, 20, 25];

//* without reduce
let total2 = 0;

for (const num of numbers2) {
  total2 += num;
}

console.log(total2);

//* with reduce

const totalSum= numbers2.reduce((total, num)=>total+=num,0)
console.log(totalSum);

/**
 * Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary= Object.values(salary).reduce((total, salar)=>total+salar,0)
console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players3 = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

const totalTimePlayed=players3.reduce((total,player)=>total+player.timePlayed,0)
console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((total,item)=>total + item.price * item.quantity ,0)


// const productsAmount = cart.reduce(
//   (total, product) => total + product.quantity,
//   0
// );

console.log(totalAmount);
// console.log(productsAmount);
// console.log("Avr price:", (totalAmount / productsAmount).toFixed(2));