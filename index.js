let name = prompt("Введіть ваше ім'я:");

let age;
do {
  age = prompt("Введіть ваш вік:");
} while (isNaN(age) || age === "");

if (age >= 18) {
  alert("Ви досягли повноліття.");
} else {
  alert("Ви ще не досягли повноліття.");
}

let continueSurvey = confirm("Бажаєте продовжити опитування?");
let favoriteColor, hobby;

if (continueSurvey) {
  favoriteColor = prompt("Ваш улюблений колір?") ?? "Не вказано";
  hobby = prompt("Ваше хобі?") ?? "Не вказано";
}

alert(`Ім'я: ${name}
Вік: ${age}
Улюблений колір: ${favoriteColor ?? "Не вказано"}
Хобі: ${hobby ?? "Не вказано"}`);

