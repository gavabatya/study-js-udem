/** ЗАДАЧА 10 - Комментарий перед функцией
 *
 * 1. Объявите функцию с двумя параметрами, значения которых - числа
 *
 * 2. Эта функция должна возвращать разницу между первым и вторым параметром
 *
 * 3. Добавьте многострочный комментарий перед функцией:
 *  - Текст комментария "Возвращает разницу двух чисел"
 *  - Укажите тип параметров - number
 *  - Укажите тип возвращаемого значения - number
 *  - Опишите возвращаемое значение - "Разница чисел"
 *
 * 4. Вызовите функцию
 */
/**
 * Возвращает разницу двух чисел
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} разница чисел
 */
function diff(a, b) {
    return a - b
  }
  
  const result = diff(10, 5)
  console.log(result)
  