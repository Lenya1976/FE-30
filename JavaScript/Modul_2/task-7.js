'use strict';

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
// // результаты вызовов других функций - isLoginUnique и
// // isLoginValid.

// const isLoginValid = (login) => {
//   if (login.length > 3 && login.length < 17) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // console.log(isLoginValid("Poly1"));
// const isLoginUnique = function(logins, login) {
//   if (logins.includes(login)) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const addLogin = function(allLogins, login) {
//   if (!isLoginValid(login)) {
//     return `Ошибка! Логин должен быть от  4 до 16 символов`;
//   }
//   if (!isLoginUnique(allLogins, login)) {
//     return `Такой логин уже используется!`;
//   } else {
//     logins.push(login);
//     return `Логин успешно добавлен!`;
//   }
// };
// console.log(isLoginValid('Pol'));
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let usreLogin;

const isLoginValid = login => 4 <= login.length && login.length <= 16;

const isLoginUnique = (allLogins, login) =>
  Array.from(allLogins).includes(login);

usreLogin = prompt('Введіть логін');
const addLogin = function(allLogins, login) {
  let message;
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      message = 'Логін вдало доданий';
    } else {
      message = 'Такий логін вже використовується';
    }
  } else {
    message = 'Помилка! Логін повиненн бути від 4 до 16 символів';
  }
  return message;
};
console.log(alert);

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
