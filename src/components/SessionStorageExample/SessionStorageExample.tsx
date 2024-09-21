import React, { useEffect, useState } from 'react';

// Пример компонента
export const SessionStorageExample: React.FC = () => {
  // Состояние для хранения массива объектов
  const [data, setData] = useState([]);

  // Пример массива объектов для сохранения
  const exampleData = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  // Функция для сохранения данных в sessionStorage
  const saveToSessionStorage = (data: any) => {
    sessionStorage.setItem('myData', JSON.stringify(data));
  };

  // Чтение данных из sessionStorage
  const loadFromSessionStorage = () => {
    const storedData = sessionStorage.getItem('myData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  };

  // Используем useEffect для загрузки данных при монтировании компонента
  useEffect(() => {
    loadFromSessionStorage();
  }, []);

  // Сохраняем данные в sessionStorage при изменении массива (например, при добавлении)
  const handleSave = () => {
    saveToSessionStorage(exampleData);
    setData(exampleData as []);
  };

  type NN = {
    id: number;
    name: string;
  }

  return (
    <div>
      <h1>Session Storage Example</h1>
      <button onClick={handleSave}>Сохранить данные</button>
      <h2>Сохраненные данные:</h2>
      <ul>
        {data.map((item: NN) => (
          <li key={item.id}>
            {item.id}: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
