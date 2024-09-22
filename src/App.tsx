import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ProductsCatalogPage } from './pages/ProductsCatalogPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import './App.scss';
import { useEffect } from 'react';
import { useStoreOfProducts } from './store';

export const App: React.FC = () => {
  const loadFromSessionStorage = useStoreOfProducts(state => state.loadFromSessionStorage);
  useEffect(() => {
    if (loadFromSessionStorage) {
      loadFromSessionStorage();
    }
  }, [loadFromSessionStorage]);

  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <ProductsCatalogPage /> },
        { path: '/shoppingcart', element: <ShoppingCartPage />, },
        { path: '*', element: <NoMatch /> },
      ],
    },
  ];

  let element = useRoutes(routes);

  return (
    <div className="app">
      {element}
    </div>
  );
}