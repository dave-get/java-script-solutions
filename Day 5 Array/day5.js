// Exersice 2

//Q(2)
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let txt = text.replace(/[.,]/g, "");

let slt = txt.split(" ");
console.log(slt);
console.log(slt.length);

//Q(5)
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let ch = webTechs.includes("Sass");

if (ch) {
  console.log("Sass is a CSS preprocess.");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

//Q(6)

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exersice 3

//Q(1)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sorted = ages.sort();
console.log(sorted);
let len = ages.length;
console.log(sorted[len / 2 - 1]);
let sum = 0;
for (let i = 0; i < len; i++) {
  sum = sum + i;
}
console.log(sum / len);
console.log(sorted[len - 1] - sorted[0]);
//Q(2) || Q(3)
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
let sort_country = countries.sort();
let c_len = countries.length;
console.log((c_len - 1) / 2);
if (c_len % 2 !== 0) {
  console.log(countries[(c_len - 1) / 2]);
} else {
  console.log(countries[c_len / 2]);
}
