/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const min = 1000;
const max = 9999;
const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];
//1
let randomazer = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};
console.log(myNumbers);

//2

let pushNewNum = (arr, min, max) => {
  let myNewNum;
  let newArr = [...arr];
  do {
    myNewNum = randomazer(min, max);
    console.log(`My random number is ${myNewNum}`);
  } while (arr.includes(myNewNum));
  newArr.push(myNewNum);
  return newArr;
};
const addNumToMyNumbers = pushNewNum(myNumbers, min, max);
console.log('new array', addNumToMyNumbers);
console.log('original array',myNumbers);
