// Имитация базы данных
const database = {
  users: [
    { id: 1, name: "Андрей", email: "andrey@example.com" },
    { id: 2, name: "Мария", email: "maria@example.com" },
    { id: 3, name: "Иван", email: "ivan@example.com" }
  ]
};

// 1. Имитация запроса через setTimeout (callback)
console.log("=== ЗАПРОС ЧЕРЕЗ SETTIMEOUT ===\n");

function getUserById(id, callback) {
  console.log("⏳ Загрузка пользователя...");
  
  setTimeout(() => {
    const user = database.users.find(u => u.id === id);
    if (user) {
      callback(null, user);  // успех
    } else {
      callback("Пользователь не найден", null);  // ошибка
    }
  }, 1500);
}

getUserById(2, (error, user) => {
  if (error) {
    console.log("❌ Ошибка:", error);
  } else {
    console.log("✅ Пользователь найден:", user);
  }
});

// 2. Имитация запроса через Promise
console.log("\n=== ЗАПРОС ЧЕРЕЗ PROMISE ===\n");

function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    console.log("⏳ Загрузка через Promise...");
    
    setTimeout(() => {
      const user = database.users.find(u => u.id === id);
      if (user) {
        resolve(user);
      } else {
        reject("Пользователь не найден");
      }
    }, 1500);
  });
}

getUserPromise(1)
  .then(user => {
    console.log("✅ Пользователь найден:", user);
  })
  .catch(error => {
    console.log("❌ Ошибка:", error);
  });

// 3. Имитация запроса через async/await
console.log("\n=== ЗАПРОС ЧЕРЕЗ ASYNC/AWAIT ===\n");

async function loadUser(id) {
  try {
    console.log(" Загрузка через async/await...");
    
    const user = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const found = database.users.find(u => u.id === id);
        if (found) {
          resolve(found);
        } else {
          reject("Пользователь не найден");
        }
      }, 1500);
    });
    
    console.log("✅ Пользователь найден:", user);
  } catch (error) {
    console.log(" Ошибка:", error);
  } finally {
    console.log("🏁 Запрос завершён");
  }
}

loadUser(3);
loadUser(999);  // несуществующий пользователь