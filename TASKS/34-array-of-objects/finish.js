/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

let cars = [
  {
    carBrand: "VW",
    price: 2500,
    isAvalableForSale: true,
  },

  {
    carBrand: "Mazda",
    price: 3100,
    isAvalableForSale: true,
  },

  {
    carBrand: "Toyota",
    price: 3600,
    isAvalableForSale: true,
  },
];

let newCar = {
  carBrand: "lexus",
  price: 7500,
  isAvalableForSale: false,
};

cars.push(newCar);

console.log(cars);
