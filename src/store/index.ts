import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ActionsShoppingCart, ArrayOfProductsProps } from "../types";
import AppleBYZS852I from '../assets/img/AppleBYZS852I.png';
import AppleEarPods from '../assets/img/AppleEarPods.png';
import AppleEarPods2 from '../assets/img/AppleEarPods2.png';
import AppleAirPods from '../assets/img/AppleAirPods.png';
import BOROFONEBO4 from '../assets/img/BOROFONEBO4.png';
import GERLAXGH04 from '../assets/img/GERLAXGH-04.png';

export const useStoreOfProducts = create(
  devtools<ArrayOfProductsProps>((set, get) => ({
    products: [
      {
        id: 1,
        img: AppleBYZS852I,
        title: "Apple BYZ S852I",
        price: 3527,
        discount: 2927,
        rate: 4.7,
        attribute: "landline",
        description: `
        1111 The ultimate over-ear personal listening experience — now in fresh new colors. 
        AirPods Max deliver stunningly detailed, high-fidelity audio. Personalized Spatial 
        Audio with dynamic head tracking for sound that surrounds you. 
        Footnote ⁴ Pro-level Active Noise Cancellation to remove unwanted sound. 
        Footnote ³ Transparency mode to comfortably hear the world around you. 
        Up to 20 hours of battery life on a single charge. Footnote ¹⁵ Effortless setup 
        and on-head detection for a magical listening experience. 
        Now with USB-C for easy charging.
      `,
      },
      {
        id: 2,
        img: AppleEarPods,
        title: "Apple EarPods",
        price: 2327,
        discount: 0,
        rate: 4.5,
        attribute: "landline",
        description: `
        1111 The ultimate over-ear personal listening experience — now in fresh new colors. 
        AirPods Max deliver stunningly detailed, high-fidelity audio. Personalized Spatial 
        Audio with dynamic head tracking for sound that surrounds you. 
        Footnote ⁴ Pro-level Active Noise Cancellation to remove unwanted sound. 
        Footnote ³ Transparency mode to comfortably hear the world around you. 
        Up to 20 hours of battery life on a single charge. Footnote ¹⁵ Effortless setup 
        and on-head detection for a magical listening experience. 
        Now with USB-C for easy charging.
      `,
      },
      {
        id: 3,
        img: AppleEarPods2,
        title: "Apple EarPods",
        price: 2327,
        discount: 0,
        rate: 4.5,
        attribute: "landline",
        description: `
        1111 The ultimate over-ear personal listening experience — now in fresh new colors. 
        AirPods Max deliver stunningly detailed, high-fidelity audio. Personalized Spatial 
        Audio with dynamic head tracking for sound that surrounds you. 
        Footnote ⁴ Pro-level Active Noise Cancellation to remove unwanted sound. 
        Footnote ³ Transparency mode to comfortably hear the world around you. 
        Up to 20 hours of battery life on a single charge. Footnote ¹⁵ Effortless setup 
        and on-head detection for a magical listening experience. 
        Now with USB-C for easy charging.
      `,
      },
      {
        id: 4,
        img: AppleBYZS852I,
        title: "Apple BYZ S852I",
        price: 2927,
        discount: 0,
        rate: 4.7,
        attribute: "landline",
        description: `
        1111 The ultimate over-ear personal listening experience — now in fresh new colors. 
        AirPods Max deliver stunningly detailed, high-fidelity audio. Personalized Spatial 
        Audio with dynamic head tracking for sound that surrounds you. 
        Footnote ⁴ Pro-level Active Noise Cancellation to remove unwanted sound. 
        Footnote ³ Transparency mode to comfortably hear the world around you. 
        Up to 20 hours of battery life on a single charge. Footnote ¹⁵ Effortless setup 
        and on-head detection for a magical listening experience. 
        Now with USB-C for easy charging.
      `,
      },
      {
        id: 5,
        img: AppleEarPods,
        title: "Apple EarPods",
        price: 2327,
        discount: 0,
        rate: 4.5,
        attribute: "landline",
        description: `
        1111 The ultimate over-ear personal listening experience — now in fresh new colors. 
        AirPods Max deliver stunningly detailed, high-fidelity audio. Personalized Spatial 
        Audio with dynamic head tracking for sound that surrounds you. 
        Footnote ⁴ Pro-level Active Noise Cancellation to remove unwanted sound. 
        Footnote ³ Transparency mode to comfortably hear the world around you. 
        Up to 20 hours of battery life on a single charge. Footnote ¹⁵ Effortless setup 
        and on-head detection for a magical listening experience. 
        Now with USB-C for easy charging.
      `,
      },
      {
        id: 6,
        img: AppleEarPods2,
        title: "Apple EarPods",
        price: 2327,
        discount: 0,
        rate: 4.5,
        attribute: "landline",
        description: `
        1111 The ultimate over-ear personal listening experience — now in fresh new colors. 
        AirPods Max deliver stunningly detailed, high-fidelity audio. Personalized Spatial 
        Audio with dynamic head tracking for sound that surrounds you. 
        Footnote ⁴ Pro-level Active Noise Cancellation to remove unwanted sound. 
        Footnote ³ Transparency mode to comfortably hear the world around you. 
        Up to 20 hours of battery life on a single charge. Footnote ¹⁵ Effortless setup 
        and on-head detection for a magical listening experience. 
        Now with USB-C for easy charging.
      `,
      },
      {
        id: 7,
        img: AppleAirPods,
        title: "Apple AirPods",
        price: 9527,
        discount: 0,
        rate: 4.7,
        attribute: "wireless",
        description: `
        1111 The ultimate over-ear personal listening experience — now in fresh new colors. 
        AirPods Max deliver stunningly detailed, high-fidelity audio. Personalized Spatial 
        Audio with dynamic head tracking for sound that surrounds you. 
        Footnote ⁴ Pro-level Active Noise Cancellation to remove unwanted sound. 
        Footnote ³ Transparency mode to comfortably hear the world around you. 
        Up to 20 hours of battery life on a single charge. Footnote ¹⁵ Effortless setup 
        and on-head detection for a magical listening experience. 
        Now with USB-C for easy charging.
      `,
      },
      {
        id: 8,
        img: GERLAXGH04,
        title: "GERLAX GH-04",
        price: 6527,
        discount: 0,
        rate: 4.7,
        attribute: "wireless",
        description: `
        1111 The ultimate over-ear personal listening experience — now in fresh new colors. 
        AirPods Max deliver stunningly detailed, high-fidelity audio. Personalized Spatial 
        Audio with dynamic head tracking for sound that surrounds you. 
        Footnote ⁴ Pro-level Active Noise Cancellation to remove unwanted sound. 
        Footnote ³ Transparency mode to comfortably hear the world around you. 
        Up to 20 hours of battery life on a single charge. Footnote ¹⁵ Effortless setup 
        and on-head detection for a magical listening experience. 
        Now with USB-C for easy charging.
      `,
      },
      {
        id: 9,
        img: BOROFONEBO4,
        title: "BOROFONE BO4",
        price: 7527,
        discount: 0,
        rate: 4.7,
        attribute: "wireless",
        description: `
        1111 The ultimate over-ear personal listening experience — now in fresh new colors. 
        AirPods Max deliver stunningly detailed, high-fidelity audio. Personalized Spatial 
        Audio with dynamic head tracking for sound that surrounds you. 
        Footnote ⁴ Pro-level Active Noise Cancellation to remove unwanted sound. 
        Footnote ³ Transparency mode to comfortably hear the world around you. 
        Up to 20 hours of battery life on a single charge. Footnote ¹⁵ Effortless setup 
        and on-head detection for a magical listening experience. 
        Now with USB-C for easy charging.
      `,
      },
    ],
  }))
);

export const useStoreOfShoppingCart = create(
  devtools<ArrayOfProductsProps & ActionsShoppingCart>((set, get) => ({
    products: [
      // {
      //   id: 11,
      //   img: ".assets/1111.png",
      //   title: "Apple AirPods Pro 11",
      //   price: 2510,
      //   rate: 4.1,
      //   attribute: "wireless",
      //   description: `**** 1111 The ultimate over-ear personal listening experience`,
      // },
      // {
      //   id: 12,
      //   img: ".assets/1212.png",
      //   title: "Apple AirPods Pro 12",
      //   price: 2510,
      //   rate: 4.1,
      //   attribute: "wireless",
      //   description: `**** 1212 The ultimate over-ear personal listening experience`,
      // },
    ],
    addProduct() {},
    removeProduct() {},
  }))
);

/**

В языке программирования Zsh, zustand — это библиотека для управления состоянием в приложениях на React. Она позволяет легко создавать и управлять состоянием, избегая сложной конфигурации и многоуровневых оберток.

Вот несколько примеров использования состояния с zustand:

1. Простой пример создания состояния

import create from 'zustand';

// Создаем хук состояния
const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

const Counter = () => {
  const { count, increase, decrease } = useStore();
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Увеличить</button>
      <button onClick={decrease}>Уменьшить</button>
    </div>
  );
};
2. Использование состояния с эффектами

import create from 'zustand';
import { useEffect } from 'react';

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));

const Counter = () => {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);

  useEffect(() => {
    const interval = setInterval(increase, 1000);
    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [increase]);

  return <h1>{count}</h1>;
};
3. Использование Zustand с несколькими состояниями

import create from 'zustand';

// Создаем хук состояния
const useStore = create((set) => ({
  count: 0,
  user: { name: '', age: 0 },
  increase: () => set((state) => ({ count: state.count + 1 })),
  setUser: (user) => set(() => ({ user })),
}));

const UserProfile = () => {
  const { user, setUser } = useStore();
  
  return (
    <div>
      <h1>Пользователь: {user.name}</h1>
      <button onClick={() => setUser({ name: 'Иван', age: 30 })}>Установить пользователя</button>
    </div>
  );
};
4. Создание Zustand с использованием middleware (например, для логирования)

import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(
  devtools((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
  }))
);

const Counter = () => {
  const { count, increase, decrease } = useStore();
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Увеличить</button>
      <button onClick={decrease}>Уменьшить</button>
    </div>
  );
};
5. Использование Zustand с React Router

import create from 'zustand';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));

const Home = () => {
  const { count, increase } = useStore();
  return (
    <div>
      <h1>Главная Страница</h1>
      <p>Счетчик: {count}</p>
      <button onClick={increase}>Увеличить</button>
      <Link to="/about">О нас</Link>
    </div>
  );
};

const About = () => <h1>О нас</h1>;

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </Router>
);
Эти примеры показывают, как можно использовать Zustand для управления состоянием в React-приложениях. Вы можете легко адаптировать их под свои нужды, добавляя новые состояния и действия.



перепиши с примером массива объектов



Конечно! Вот примеры использования Zustand с массивом объектов. Мы создадим состояние для управления списком пользователей, где каждый пользователь будет представлен объектом с полями id, name и age.

Пример 1: Простое управление массивом объектов

import create from 'zustand';

// Создаем хук состояния
const useStore = create((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (id) => set((state) => ({
    users: state.users.filter((user) => user.id !== id),
  })),
}));

const UserList = () => {
  const { users, addUser, removeUser } = useStore();

  const handleAddUser = () => {
    const newUser = { id: Date.now(), name: 'Новый пользователь', age: Math.floor(Math.random() * 30) + 20 };
    addUser(newUser);
  };

  return (
    <div>
      <h1>Список пользователей</h1>
      <button onClick={handleAddUser}>Добавить пользователя</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} (Возраст: {user.age})
            <button onClick={() => removeUser(user.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
Пример 2: Управление состоянием с использованием эффекта

import create from 'zustand';
import { useEffect } from 'react';

// Создаем хук состояния
const useStore = create((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (id) => set((state) => ({
    users: state.users.filter((user) => user.id !== id),
  })),
  fetchUsers: async () => {
    // Имитация получения данных с сервера
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Иван', age: 25 },
          { id: 2, name: 'Анна', age: 30 },
          { id: 3, name: 'Петр', age: 22 },
        ]);
      }, 1000);
    });
    set({ users: response });
  },
}));

const UserList = () => {
  const { users, addUser, removeUser, fetchUsers } = useStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleAddUser = () => {
    const newUser = { id: Date.now(), name: 'Новый пользователь', age: Math.floor(Math.random() * 30) + 20 };
    addUser(newUser);
  };

  return (
    <div>
      <h1>Список пользователей</h1>
      <button onClick={handleAddUser}>Добавить пользователя</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} (Возраст: {user.age})
            <button onClick={() => removeUser(user.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
Пример 3: Использование middleware для логирования

import create from 'zustand';
import { devtools } from 'zustand/middleware';

// Создаем хук состояния с middleware для логирования
const useStore = create(
  devtools((set) => ({
    users: [],
    addUser: (user) => set((state) => ({ users: [...state.users, user] })),
    removeUser: (id) => set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  }))
);

const UserList = () => {
  const { users, addUser, removeUser } = useStore();

  const handleAddUser = () => {
    const newUser = { id: Date.now(), name: 'Новый пользователь', age: Math.floor(Math.random() * 30) + 20 };
    addUser(newUser);
  };

  return (
    <div>
      <h1>Список пользователей</h1>
      <button onClick={handleAddUser}>Добавить пользователя</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} (Возраст: {user.age})
            <button onClick={() => removeUser(user.id)}>Удалить</button>
          </


Продолжай



Продолжаем с примерами использования Zustand для управления массивом объектов. Мы завершили последний пример, так что теперь я добавлю еще несколько вариантов, а также заключительные части кода.

Пример 3 (продолжение): Использование middleware для логирования

            <button onClick={() => removeUser(user.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
В этом примере мы используем zustand с devtools для логирования изменений состояния. Это позволяет отслеживать изменения состояния в инструментах разработчика.

Пример 4: Форма для добавления пользователей
Давайте добавим небольшую форму, чтобы пользователь мог вводить имя и возраст нового пользователя.


import create from 'zustand';
import { useState } from 'react';

// Создаем хук состояния
const useStore = create((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (id) => set((state) => ({
    users: state.users.filter((user) => user.id !== id),
  })),
}));

const UserList = () => {
  const { users, addUser, removeUser } = useStore();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name,
      age: parseInt(age, 10),
    };
    addUser(newUser);
    setName(''); // Очистка поля ввода
    setAge(''); // Очистка поля ввода
  };

  return (
    <div>
      <h1>Список пользователей</h1>
      <div>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Возраст"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleAddUser}>Добавить пользователя</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} (Возраст: {user.age})
            <button onClick={() => removeUser(user.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
Пример 5: Обновление пользователя
Добавим возможность обновлять информацию о пользователе.


import create from 'zustand';
import { useState } from 'react';

// Создаем хук состояния
const useStore = create((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (id) => set((state) => ({
    users: state.users.filter((user) => user.id !== id),
  })),
  updateUser: (id, updatedUser) => set((state) => ({
    users: state.users.map((user) => (user.id === id ? updatedUser : user)),
  })),
}));

const UserList = () => {
  const { users, addUser, removeUser, updateUser } = useStore();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name,
      age: parseInt(age, 10),
    };
    addUser(newUser);
    clearInputs();
  };

  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setName(user.name);
    setAge(user.age);
  };

  const handleUpdateUser = () => {
    const updatedUser = {
      id: editingUserId,
      name,
      age: parseInt(age, 10),
    };
    updateUser(editingUserId, updatedUser);
    clearInputs();
    setEditingUserId(null);
  };

  const clearInputs = () => {
    setName('');
    setAge('');
  };

  return (
    <div>
      <h1>Список пользователей</h1>
      <div>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Возраст"
          value={age}


продолжай



Конечно! Продолжим с примера, добавляя возможность редактирования пользователей. Мы остановились на добавлении полей ввода для имени и возраста. Давайте завершим этот пример.

Пример 5 (продолжение): Обновление пользователя

          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {editingUserId ? (
          <button onClick={handleUpdateUser}>Обновить пользователя</button>
        ) : (
          <button onClick={handleAddUser}>Добавить пользователя</button>
        )}
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} (Возраст: {user.age})
            <button onClick={() => handleEditUser(user)}>Редактировать</button>
            <button onClick={() => removeUser(user.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
Объяснение кода
Создание состояния:
Мы создаем состояние с помощью create, где у нас есть массив users, а также функции для добавления, удаления и обновления пользователей.
Форма для добавления и редактирования пользователей:
Мы используем два состояния: name и age, чтобы отслеживать значения вводимых пользователем данных.
Если editingUserId не равен null, это означает, что мы редактируем существующего пользователя. В этом случае кнопка будет отображать текст "Обновить пользователя". Если нет, то будет кнопка "Добавить пользователя".
Обработка добавления и обновления:
Функции handleAddUser и handleUpdateUser обрабатывают добавление нового пользователя и обновление информации о существующем. После выполнения обновления или добавления, поля ввода очищаются.
Отображение списка пользователей:
Мы отображаем список пользователей с кнопками для редактирования и удаления каждого пользователя. При нажатии кнопки "Редактировать" значения имени и возраста передаются в поля ввода.
Пример 6: Использование фильтрации
Добавим возможность фильтрации пользователей по имени. Это позволит пользователю быстрее находить нужных пользователей в списке.


import create from 'zustand';
import { useState } from 'react';

// Создаем хук состояния
const useStore = create((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (id) => set((state) => ({
    users: state.users.filter((user) => user.id !== id),
  })),
  updateUser: (id, updatedUser) => set((state) => ({
    users: state.users.map((user) => (user.id === id ? updatedUser : user)),
  })),
}));

const UserList = () => {
  const { users, addUser, removeUser, updateUser } = useStore();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);
  const [filter, setFilter] = useState('');

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name,
      age: parseInt(age, 10),
    };
    addUser(newUser);
    clearInputs();
  };

  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setName(user.name);
    setAge(user.age);
  };

  const handleUpdateUser = () => {
    const updatedUser = {
      id: editingUserId,
      name,
      age: parseInt(age, 10),
    };
    updateUser(editingUserId, updatedUser);
    clearInputs();
    setEditingUserId(null);
  };

  const clearInputs = () => {
    setName('');
    setAge('');
  };

  // Фильтрация пользователей по имени
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>Список пользователей</h1>
      <div>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Возраст"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {editingUserId ? (
          <button onClick={handleUpdateUser}>Обновить пользователя</


продолжай



Конечно! Продолжим с добавления функционала фильтрации пользователей по имени и завершим код.

Пример 6 (продолжение): Использование фильтрации

        ) : (
          <button onClick={handleAddUser}>Добавить пользователя</button>
        )}
      </div>

      // Поле для фильтрации пользователей 
      <div style={{ marginTop: '16px' }}>
        <input
          type="text"
          placeholder="Фильтровать по имени"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <ul>
        // Отображаем отфильтрованный список пользователей
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} (Возраст: {user.age})
            <button onClick={() => handleEditUser(user)}>Редактировать</button>
            <button onClick={() => removeUser(user.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
Объяснение кода
Поле для фильтрации:
Мы добавили новое состояние filter, которое отслеживает значение, введенное в поле для фильтрации. Это поле позволяет пользователю вводить текст для фильтрации списка пользователей по имени.
Фильтрация пользователей:
Мы используем метод filter для массива users, чтобы создать новый массив filteredUsers, который содержит только тех пользователей, чьи имена включают введенный текст (игнорируя регистр). Это делается с помощью toLowerCase().
Отображение отфильтрованных пользователей:
Вместо отображения всех пользователей, мы отображаем только тех, кто соответствует критериям фильтрации.
Управление состоянием:
Весь функционал по добавлению, редактированию и удалению пользователей остается прежним. Мы просто добавили дополнительную логику для фильтрации.
Полный код компонента
Вот полный код компонента UserList с добавленной функциональностью для управления массивом объектов и фильтрацией:


import create from 'zustand';
import { useState } from 'react';

// Создаем хук состояния
const useStore = create((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (id) => set((state) => ({
    users: state.users.filter((user) => user.id !== id),
  })),
  updateUser: (id, updatedUser) => set((state) => ({
    users: state.users.map((user) => (user.id === id ? updatedUser : user)),
  })),
}));

const UserList = () => {
  const { users, addUser, removeUser, updateUser } = useStore();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);
  const [filter, setFilter] = useState('');

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name,
      age: parseInt(age, 10),
    };
    addUser(newUser);
    clearInputs();
  };

  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setName(user.name);
    setAge(user.age);
  };

  const handleUpdateUser = () => {
    const updatedUser = {
      id: editingUserId,
      name,
      age: parseInt(age, 10),
    };
    updateUser(editingUserId, updatedUser);
    clearInputs();
    setEditingUserId(null);
  };

  const clearInputs = () => {
    setName('');
    setAge('');
  };

  // Фильтрация пользователей по имени
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>Список пользователей</h1>
      <div>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Возраст"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {editingUserId ? (
          <button onClick={handleUpdateUser}>Обновить пользователя</button>
        ) : (
          <button onClick={handleAddUser}>Добавить пользователя</button>
        )}
      </

*/

/***
 * You can use zustand StoreCreator generic type. Import the type and pass store interface to StoreCreator and then use that type for templateStore.

import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface TemplateStore {
    borderRadius: number;
    drawerWidth: number;
    fontFamily: string;
    headerHeight: number;
    language: string;
    opened: boolean;
    setLang: (lang: string) => void;
    setMenu: () => void;
}

type CustomStoreType = StateCreator<TemplateStore>;

const templateStore: CustomStoreType = (set, get) => ({
    borderRadius: 12,
    drawerWidth: 250,
    fontFamily: `'Roboto', sans-serif`,
    headerHeight: 80,
    language: 'UK',
    opened: true,
    setLang: (lang) => set({ language: lang }),
    setMenu: () => set((state) => ({ opened: !state.opened }))
});

const useTemplateStore = create<TemplateStore>()(
    devtools(
        persist(templateStore, {
            name: 'template'
        })
    )
);

export default useTemplateStore;

 */

/**
 * 
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface Todo {
  id: string
  title: string
  done: boolean
}

type State = {
  todos: Record<string, Todo>
}

type Actions = {
  toggleTodo: (todoId: string) => void
}

export const useTodoStore = create<State & Actions>()(
  immer((set) => ({
    todos: {
      '82471c5f-4207-4b1d-abcb-b98547e01a3e': {
        id: '82471c5f-4207-4b1d-abcb-b98547e01a3e',
        title: 'Learn Zustand',
        done: false,
      },
      '354ee16c-bfdd-44d3-afa9-e93679bda367': {
        id: '354ee16c-bfdd-44d3-afa9-e93679bda367',
        title: 'Learn Jotai',
        done: false,
      },
    },
    toggleTodo: (todoId: string) =>
      set((state) => {
        state.todos[todoId].done = !state.todos[todoId].done
      }),
  })),
)
 */
