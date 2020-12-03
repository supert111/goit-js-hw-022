let total = 0;
let input;

do {
    input = prompt('Введите число');

    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
    }

    else  {
        total += Number(input);
    }
    
} while (input !== null); 
alert(`Общая сумма чисел равна [${total}]`);

// ===========================================================


// let total = 0;

// while (true) {
//     let input = prompt('Введите число');

//     if(input === null) {
//         break;
//     }

//     input = Number(input);

//     const notANumber = Number.isNaN(input);

//     if (notANumber) {
//         alert('Было введено не число, попробуйте еще раз');
//         continue;
//     }
//     total += input;
// } 
// alert(`Общая сумма чисел равна [${total}]`);