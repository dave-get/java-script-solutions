// Exersice 1

//Q(11)
let sume = 0;
let sumo = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sume += i;
  } else {
    sumo += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${sume}. And the sum of all odds from 0 to 100 is ${sumo}.`
);
//Q(15)
let id = "";
for (let i = 0; i < 6; i++) {
  const ascii = String.fromCharCode(
    Math.floor(Math.random() * (126 - 33 + 1)) + 33
  );
  id += ascii;
}
console.log(id);

// Exercise 2

//Q(2)
let hexa = "#";
let chars = "abcdefghijklmnopqrstuvwzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
for (let i = 0; i <= 6; i++) {
  const ascii = Math.floor(Math.random() * chars.length);
  hexa += chars.charAt(ascii);
}
console.log(hexa);

//Q(6)
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let arry = [];
let abc = [];
for (let i = 0; i < countries.length; i++) {
  abc.push(Array(countries[i][0], countries[i][1], countries[i][2]));
  arry.push(
    Array(countries[i], abc[i].join("").toUpperCase(), countries[i].length)
  );
}
console.log(arry);
//Q(9)
let biggest = 0;
let big_country;
for (const i of arry) {
  if (i[2] > biggest) {
    biggest = i[2];
    big_country = i[0];
  }
}
console.log(big_country);
//Q(12)

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let webtech = [];
for (let i = 0; i < webTechs.length; i++) {
  webtech.push(Array(webTechs[i], webTechs[i].length));
}
console.log(webtech);

// Exercise 3
//Q(1)

let copy = countries.slice();
console.log(copy);
