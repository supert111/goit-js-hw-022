const credits = 23580;
const pricePerDroid = 3000;

let userOrder = prompt('Введите количество дроидов');
if (userOrder === null) {
    alert('Отменено пользователем!');
}
userOrder = Number(userOrder);
const totalPrice = userOrder * pricePerDroid;
const totalCredits = credits - totalPrice;
console.log(totalPrice);

const message = credits > totalPrice ? `Вы купили [${userOrder}] дроидов, на счету осталось [${totalCredits}] кредитов.` 
: 'Недостаточно средств на счету!';
console.log(message);