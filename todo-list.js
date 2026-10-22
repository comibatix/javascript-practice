// Массив для хранения задач
let todos = [];

// Функция добавления задачи
function addTodo(text) {
  const todo = {
    id: todos.length + 1,
    text: text,
    completed: false
  };
  todos.push(todo);
  console.log(`✅ Задача добавлена: "${text}"`);
}

// Функция завершения задачи
function completeTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = true;
    console.log(`✔️ Задача выполнена: "${todo.text}"`);
  } else {
    console.log(`❌ Задача с ID ${id} не найдена`);
  }
}

// Функция удаления задачи
function deleteTodo(id) {
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) {
    const removed = todos.splice(index, 1);
    console.log(`️ Задача удалена: "${removed[0].text}"`);
  } else {
    console.log(`❌ Задача с ID ${id} не найдена`);
  }
}

// Функция отображения всех задач
function showTodos() {
  console.log("\n=== СПИСОК ЗАДАЧ ===");
  if (todos.length === 0) {
    console.log("Список пуст");
  } else {
    todos.forEach(todo => {
      const status = todo.completed ? "✔️" : "⬜";
      console.log(`${status} [${todo.id}] ${todo.text}`);
    });
  }
  console.log("===================\n");
}

// Тестируем
addTodo("Купить молоко");
addTodo("Сделать домашку");
addTodo("Позвонить маме");

showTodos();

completeTodo(2);
showTodos();

deleteTodo(1);
showTodos();