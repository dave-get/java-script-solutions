//Exersice 2
//13
const year = prompt('Enter birth year: ');
const Age = new Date().getFullYear() - year; 
if(Age >= 18){
    console.log(`You are ${Age}. You are old enough to drive`);
}else{
    let left = 18-Age;
    console.log(`You are ${Age}. You will be allowed to drive after ${left} years.`);
}

//14
const numYear = prompt('Enter number of years you live: ');
const birth_sec = (numYear*365.25*24*60*60);
console.log(birth_sec);


let dates = new Date();
let yyyy = dates.getFullYear();
let DD = dates.getDate();
let MM = dates.getMonth()+1;
let hr = dates.getHours();
let min = dates.getMinutes();

// 15    Exersice 3 Qs(1)
console.log(`${yyyy}-${DD}-${MM} ${hr}:${min}`);
console.log(`${DD}-${MM}-${yyyy} ${hr}:${min}`);
console.log(`${DD}/${MM}/${yyyy} ${hr}:${min}`);