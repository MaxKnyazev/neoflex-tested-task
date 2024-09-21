import { Routes, Route } from 'react-router-dom';
import { ProductsCatalogPage } from './pages/ProductsCatalogPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ProductsCatalogPage />} />
          <Route path='shoppingcart' element={<ShoppingCartPage />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>

    </div>
  );
}