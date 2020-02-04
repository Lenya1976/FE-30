"use strict";

// Есть массив logins с логинами пользователей.
// Напиши скрипт добавления логина в массив logins.
// Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти
// символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login), в которой
// проверь количество символов параметра login и
// верни true или false в зависимости от того,
// попадает ли длина параметра в заданный диапазон
// от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login),
// которая принимает список всех логинов и добавляемый
// логин как параметры и проверяет наличие login в массиве
// allLogins, возвращая true если такого логина еще нет и
// false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную
// функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции
// addLogin и вернуть строку 'Ошибка! Логин должен быть от
// 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность
// логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет
// логин в массив и возвращает строку
// 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет
// новый логин в logins и возвращает строку
// 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции -
// каждая функция делает что-то одно. Это позволяет
// переиспользовать код и изменять логику работы
// функции только в одном месте, не затрагивая работу
// программы в целом.

// Предикатные функции возвращают только true или false.
// Такие функции принято называть начиная с is: isLoginUnique
// и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в
// массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и
// возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.
// При этом для проверок условия добавления использует
// результаты вызовов других функций - isLoginUnique и
// isLoginValid.

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if (login.length > 3 && login.length < 17) {
    return true;
  } else {
    return false;
  }
};
let LoginValid = isLoginValid.return;

// console.log(isLoginValid("Poly1"));

const isLoginUnique = function(Logins, login) {
  if (logins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

// console.log(isLoginUnique(logins, "Poly1"));

const addLogin = function(allLogins, login) {
  if (LoginValid !== true) {
    message = `Ошибка! Логин должен быть от  4 до 16 символов`;
    console.log(message);
  }
};
console.log(isLoginValid("Pol"));
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// const printValue = function(value) {
//   console.log(value);
// };

// const prettyPrint = function(value) {
//   console.log("Logging value: ", value);
// };

// const repeat = function(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2
