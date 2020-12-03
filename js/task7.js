const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// Вернет новый массив в котором будут элементы с индексами от 1 до 2
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// Вернет новый массив в котором будут
// элементы с индексами от 1 до (clients.length - 1)
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]

// Вернет копию исходного массива
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// Вернет новый массив состоящих из последних двух элементом исходного
console.log(clients.slice(-3,-1)); // ["Poly", "Kiwi"]





  
  