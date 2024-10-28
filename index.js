function getValidatedInput(promptText, validationFn, errorMessage) {
  let input;
  do {
    input = prompt(promptText);
    if (!validationFn(input)) alert(errorMessage);
  } while (!validationFn(input));
  return input;
}

function isNotEmpty(input) {
  return input && input.trim() !== '';
}

function isNumber(input) {
  return !isNaN(input) && input.trim() !== '';
}

let name = getValidatedInput('Введіть ваше ім\'я:', isNotEmpty,
    'Ім\'я не може бути пустим!');

let age = Number(
    getValidatedInput('Введіть ваш вік:', isNumber, 'Вік має бути числом!'));

age >= 18
    ? alert(`Привіт, ${name}. Ви досягли повноліття!`)
    : alert(`Привіт, ${name}. Ви ще не досягли повноліття.`);

function getOptionalInput(promptText, defaultValue = 'Не вказано') {
  let input = prompt(promptText);
  return input ?? defaultValue;
}

let continueSurvey = confirm('Бажаєте продовжити опитування?');
let favoriteColor, hobby, job, country;

if (continueSurvey) {
  favoriteColor = getOptionalInput('Ваш улюблений колір?', 'Не вказано');
  hobby = getOptionalInput('Ваше хобі?', 'Не вказано');

  job = getOptionalInput('Чим ви займаєтесь?', 'Не вказано');

  country = getOptionalInput('З якої ви країни?', 'Не вказано');
}

alert(`
  Ім'я: ${name}
  Вік: ${age}
  Улюблений колір: ${favoriteColor ?? 'Не вказано'}
  Хобі: ${hobby ?? 'Не вказано'}
  Зайнятість: ${job ?? 'Не вказано'}
  Країна: ${country ?? 'Не вказано'}
`);
