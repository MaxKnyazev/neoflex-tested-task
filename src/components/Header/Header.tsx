import { Link } from 'react-router-dom';
import { useStoreOfShoppingCart } from '../../store';

export const Header: React.FC = () => {
  const products = useStoreOfShoppingCart((state) => state.products);
  return (
    <div>
      <h2>Header</h2>
      <nav>
        <ul>
          <li>
            <Link to='/'>Product Catalog</Link>
          </li>
          <li>
            <Link to='/shoppingcart'>Shopping cart</Link>
          </li>
          <li>
            <p>----</p>
            {products.length > 0 && <p>{products.length}</p>}
          </li>
        </ul>
      </nav>

      <hr />

    </div>
  );
}


/**
 * 
import { useStoreOfShoppingCart } from '../store';

export const ShoppingCartPage: React.FC = () => {
  const products = useStoreOfShoppingCart((state) => state.products);

 */