'use strict';

// Напиши скрипт, который, для объекта user,
// последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:
// значение используя Object.keys() и for...of
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';
console.log(user);
for (const key in user) {
  console.log(key, user[key]);
  console.log(`key: ${key}, value: ${user[key]}`);
}

const keys = Object.keys(user);
console.log(keys);

for (const key of keys) {
  console.log(`key: ${key}, value: ${user[key]}`);
}
