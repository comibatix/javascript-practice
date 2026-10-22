// Функции калькулятора
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Ошибка: деление на ноль!";
  }
  return a / b;
}

// Главное меню
console.log("=== КАЛЬКУЛЯТОР ===\n");

const num1 = 10;
const num2 = 5;

console.log(`Число 1: ${num1}`);
console.log(`Число 2: ${num2}\n`);

console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
console.log(`${num1} / 0 = ${divide(num1, 0)}`);

console.log("\n=== КАЛЬКУЛЯТОР ЗАВЕРШЁН ===");