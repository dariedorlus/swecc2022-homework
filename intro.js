let a = 40;
let b = 20;

if (a > 10 && b > 10) {
  console.log("a and b are greater than 10");
}

if (a > 60 && b > 60) {
  console.log("a and b are greater than 60");
}

if (a > 60 || b < 60) {
  console.log(" b is less than 60");
}

let hour = 16;

let msg = hour < 11 ? "Good Morning" : "Good Afternoon";

console.log(msg);

let fruit = "peach";

switch (fruit) {
  case "apple":
    console.log("Yummy apples");
    break;

  case "kiwi":
    console.log("Yummy kiwis");
    break;

  default:
    console.log(`Ain't nobody got time for that`);
    break;
}

function isDrinkingAge(age){
    if(age >= 21){
        return true
    } else {
        return false
    }
}

console.log(`Can Darie drink ${isDrinkingAge(32)}`)
