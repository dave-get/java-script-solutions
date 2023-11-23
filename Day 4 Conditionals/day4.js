//----------------------- Day 4----------------------------

// Exersice 2
// Q1
let grade = prompt("Enter Average: ");
switch (true) {
  case grade >= 80:
    console.log("A");
    break;
  case grade >= 70:
    console.log("B");
    break;
  case grade >= 60:
    console.log("C");
    break;
  case grade >= 50:
    console.log("D");
    break;
  case grade >= 0:
    console.log("F");
    break;
}

//Q2
let season = prompt("Enter month: ");
let SS = season.toLowerCase();
if (SS === "september" || SS === "october" || SS === "november") {
  console.log("Autumn Season");
} else if (SS === "december" || SS === "january" || SS === "february") {
  console.log("Winter Season");
} else if (SS === "march" || SS === "april" || SS === "may") {
  console.log("Spring Season");
}
if (SS === "june" || SS === "july" || SS === "august") {
  console.log("Summer Season");
} else {
  console.log("please enter the proper month !!!");
}

//Q3
let days = prompt("What is the day today? ");
let SSday = days.toLowerCase();
switch (SSday) {
  case "saturday":
    console.log("Saturday is a weekend.");
    break;
  case "sunday":
    console.log("Sunday is a weekend.");
    break;
  default:
    if (
      SSday === "monday" ||
      SSday === "tuesday" ||
      SSday === "wednesday" ||
      SSday === "thursday" ||
      SSday === "friday"
    ) {
      console.log(`${SSday} is a working day.`);
    } else {
      console.log("please enter days of the week !!!");
    }
}

// Exersice 3
//Q1
let month = prompt("Enter a month:");
if (
  month === "january" ||
  month === "march" ||
  month === "may" ||
  month === "july" ||
  month === "august" ||
  month === "october" ||
  month === "december"
) {
  console.log(`${month} has 31 days.`);
} else if (
  month === "april" ||
  month === "june" ||
  month === "september" ||
  month === "november"
) {
  console.log(`${month} has 30 days.`);
} else if (month === "february") {
  console.log(`${month} has 29 days.`);
} else {
  console.log("Enter the proper month !!!");
}
