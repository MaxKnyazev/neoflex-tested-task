import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ActionsShoppingCart, ArrayOfProductsProps, ProductProps } from "../types";
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
    addProduct: (product: ProductProps) => set((state) => ({ products: [...state.products, product] })),
    removeProduct: (id: number) => set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  }))
);

/**

Использование состояния с эффектами

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
 */
