import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ActionsProducts, ArrayOfProductsProps, ProductProps } from '../types';
import AppleBYZS852I from '../assets/img/AppleBYZS852I.png';
import AppleEarPods from '../assets/img/AppleEarPods.png';
import AppleEarPods2 from '../assets/img/AppleEarPods2.png';
import AppleAirPods from '../assets/img/AppleAirPods.png';
import BOROFONEBO4 from '../assets/img/BOROFONEBO4.png';
import GERLAXGH04 from '../assets/img/GERLAXGH-04.png';

export const useStoreOfProducts = create(
  devtools<ArrayOfProductsProps & ActionsProducts>((set, get) => ({
    products: [
      {
        id: 1,
        img: AppleBYZS852I,
        title: "Apple BYZ S852I",
        price: 3527,
        discount: 2927,
        rate: 4.7,
        attribute: "landline",
        count: 0,
        isFavourite: false,
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
        count: 0,
        isFavourite: false,
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
        count: 0,
        isFavourite: false,
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
        count: 0,
        isFavourite: false,
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
        count: 0,
        isFavourite: false,
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
        count: 0,
        isFavourite: false,
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
        count: 0,
        isFavourite: false,
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
        count: 0,
        isFavourite: false,
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
        count: 0,
        isFavourite: true,
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
    saveToSessionStorage: (data: ProductProps[]) => {
      sessionStorage.setItem('products', JSON.stringify(data));
    },
    editProductCount: (id: number, newCount: number) => {
      set((state) => ({
        products: state.products.map(product => {
          if (product.id === id) {
            product.count = newCount;
          }
          return product;
        })
      }))
      const saveToSessionStorage = get().saveToSessionStorage;
      const products = get().products;
      if (saveToSessionStorage && products) saveToSessionStorage(products);
      // if (get().saveToSessionStorage && get().products) { 
      //   get().saveToSessionStorage(get().products)
      // }
    },
    loadFromSessionStorage: () => {
      const storedData = sessionStorage.getItem('products');
      const parsedData = storedData && JSON.parse(storedData);
      if (storedData) { set(state => ({products: [...parsedData]}))}
    }
    // toggleProductFavourite?: (id: number) => void,
  }))
);
