let input;
const numbers = [];
let total = 0;


do {
    input = prompt('Введите число');

    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
    }
    else {
        numbers.push(input);   
    }
} while (input !== null); 
    if(numbers.length) {
        for (let number of numbers) {
            number = Number(number);                
            total += number; 
        }   
    }
        console.log(numbers);

alert(`Общая сумма чисел равна [${total}]`);