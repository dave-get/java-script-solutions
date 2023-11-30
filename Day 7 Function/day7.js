// Exercise 1
//Q(5)
let perimeter = (length, width) => 2 * (length + width);
console.log(perimeter(2, 4));
//Q(12)
let fahrenheit = (celsius) => (9 / 5) * celsius + 32;
console.log(fahrenheit(5));

//Exercise 2
//Q(2)
let quadratic = (a, b, c) => {
  x1 = ((-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a;
  x2 = ((-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a;
  if (x1 !== x2) {
    console.log(x1);
    console.log(x2);
  } else {
    console.log(x1);
  }
};
quadratic(1, 7, 12);
//Q(6)
let arry = (arrays) => {
  console.log(arrays.reverse());
};
let arr = ["a", "b", "c", "d"];
arry(arr);
//Q(12)
let sumOfEven = (...arguments) => {
  sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 0) sum = sum + arguments[i];
  }
  return sum;
};
console.log(sumOfEven(1, 2, 3, 4, 5, 6));
//Q(18)
function userIdGenerator() {
  let id = "";
  let chars = "abcdefghijklmnopqrstuvwzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  for (let i = 0; i <= 6; i++) {
    const ascii = Math.floor(Math.random() * chars.length);
    id += chars.charAt(ascii);
  }
  return id;
}
console.log(userIdGenerator());
//Exercise 3
//Q(7)
function num(n) {
  hexalist = [];
  rgblist = [];
  for (let i = 0; i < n; i++) {
    let a = "#";
    let hexachar =
      "abcdefghijklmnopqrstuvwzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (let i = 0; i < 6; i++) {
      const hexa = Math.floor(Math.random() * hexachar.length);
      a = a + hexachar.charAt(hexa);
    }
    hexalist.push(a);
    let b = "rgb(";
    for (let i = 0; i < 3; i++) {
      const rgb = Math.floor(Math.random() * 256);
      coma = i < 2 ? "," : "";
      b = b + rgb + coma;
    }
    b += ")";
    rgblist.push(b);
  }
  console.log(hexalist);
  console.log(rgblist);
}
let n = 3;
num(n);
//Q(11)
function sumation(ar1, ar2) {
  let no_sum = ar1 + ar2;
  console.log(no_sum);
}
sumation(30, 48);
