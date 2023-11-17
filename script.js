//DAY 1
// Q1 Print numbers from 1 to 10
const n = [];

for (let i = 1; i <= 10; i++) {
  n.push(i);
}
console.log(n);

// Q2 Print the odd numbers less than 100
const m = [];

for (let i = 1; i <= 100; i = i + 2) {
  m.push(i);
}
console.log(m);

// Q3	Print the even numbers greater 100 and less than 200
const x = [];

for (let i = 102; i <= 200; i = i + 2) {
  x.push(i);
}
console.log(x);

// 4.	Create an array of 11 cars.

const car = [
  "kia",
  "Benz",
  "Ford",
  "Honda",
  "Jeep",
  "Lexus",
  "Toyota",
  "Dodge",
  "Tesla",
  "Nissan",
  "Audi",
  "Chevrolet",
  "BMW",
  "motorolla",
];

console.log(car);
// console.log(car[0]);
// console.log(car[5]);
// console.log(car[10]);
console.log(car.length);
console.log(Math.ceil(car.length / 2));
let middle = Math.floor(car.length / 2);
let last_car = car.length - 1;
// console.log();

console.log(car[0], car[middle], car[last_car]);

// Q6 Create a multi-dimensional array of alphabets which has 5 columns and 5 rows.

const matrix = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "i", "j"],
  ["k", "l", "m", "n", "o"],
  ["p", "q", "r", "s", "t"],
  ["u", "v", "w", "x", "y"],
];

console.log(matrix[4][4]);

// Q7

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;

console.log(`Mark BMI is ${BMIMark}`, `\nJohn BMI is ${BMIJohn}`);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//Part 2
massMark = 105;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;
console.log(`Mark BMI is ${BMIMark}`, `\nJohn BMI is ${BMIJohn}`);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(
    "Mark's BMI " + BMIMark + " is highre than John's BMI " + BMIJohn
  );
} else {
  console.log(
    "John's BMI " + BMIJohn + " is highre than Mark's BMI " + BMIMark
  );
}

//Ternary operator
let pepsi = 200;
let price = 150;

let choice = pepsi < price ? "Buy 1 bottle" : "Buy happy happy";

console.log(choice);

// while loop;

// let i = 1;
// while (i <= 10) {
//   console.log(i);

//   i++;
// }
