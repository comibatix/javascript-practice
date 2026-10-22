// База данных пользователей
const users = [
  { id: 1, name: "Анна", age: 25, city: "Минск", score: 85 },
  { id: 2, name: "Борис", age: 30, city: "Гродно", score: 92 },
  { id: 3, name: "Вика", age: 22, city: "Гродно", score: 78 },
  { id: 4, name: "Глеб", age: 28, city: "Витебск", score: 95 },
  { id: 5, name: "Даша", age: 35, city: "Минск", score: 88 },
  { id: 6, name: "Егор", age: 24, city: "Гродно", score: 70 }
];

// 1. Фильтрация: только из Минска
console.log("=== Пользователи из Минска ===");
const moscowUsers = users.filter(user => user.city === "Минск");
moscowUsers.forEach(user => {
  console.log(`${user.name}, ${user.age} лет, балл: ${user.score}`);
});

// 2. Сортировка: по возрасту (от младшего к старшему)
console.log("\n=== Сортировка по возрасту ===");
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
sortedByAge.forEach(user => {
  console.log(`${user.name}, ${user.age} лет`);
});

// 3. Сортировка: по баллу (от высшего к низшему)
console.log("\n=== Сортировка по баллу (топ-3) ===");
const topUsers = [...users].sort((a, b) => b.score - a.score).slice(0, 3);
topUsers.forEach((user, index) => {
  console.log(`${index + 1}. ${user.name} — ${user.score} баллов`);
});

// 4. Поиск: найти пользователя по имени
console.log("\n=== Поиск пользователя ===");
function findUser(name) {
  const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
  if (user) {
    console.log(`Найден: ${user.name}, ${user.age} лет, ${user.city}`);
  } else {
    console.log(`Пользователь "${name}" не найден`);
  }
}

findUser("Вика");
findUser("Алексей");

// 5. Комбинированный запрос: совершеннолетние из Москвы с баллом > 80
console.log("\n=== Совершеннолетние из Гродно с баллом > 80 ===");
const filtered = users.filter(user => 
  user.age >= 18 && 
  user.city === "Гродно" && 
  user.score > 80
);
filtered.forEach(user => {
  console.log(`${user.name}, ${user.age} лет, балл: ${user.score}`);
});