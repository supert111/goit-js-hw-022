
// Напиши функцию findBestEmployee(employees), 
// которая принимает объект сотрудников и возвращает
//  имя самого продуктивного (который выполнил больше 
//   всех задач). Сотрудники и кол-во выполненых задач 
//   содержатся как свойства объекта в формате 
//   "имя":"кол-во задач".

const findBestEmployee = function(employees) {
  // const keys = Object.keys(employees);
  // for (const key of keys)
  // console.table(key);
  let maxNumber = 0;
  const values = Object.values(employees);
  // values = Number(values);
  for (const value of values) {
    if( maxNumber < value.length)
    maxNumber = value;
  // console.log(value);
  console.log(value);
  }
  

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux