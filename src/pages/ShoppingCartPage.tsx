import { ShoppingCart } from '../components/ShoppingCart';
import { useStoreOfShoppingCart } from '../store';

export const ShoppingCartPage: React.FC = () => {
  const products = useStoreOfShoppingCart((state) => state.products);
  return (
    <div>
      <h2>Shopping cart page</h2>
      <ShoppingCart products={products}/>
    </div>
  );
}
