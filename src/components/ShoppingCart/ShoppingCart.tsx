// import { ActionsShoppingCart, ArrayOfProductsProps } from '../../types';
// import { Product } from '../Product';
// import AppleBYZS852I from '../../assets/img/AppleBYZS852I.png';
import { ProductShoppingCart } from '../ProductShoppingCart';
import { useStoreOfShoppingCart } from '../../store';
import './ShoppingCart.scss';

export const ShoppingCart: React.FC = () => {
  const products = useStoreOfShoppingCart(state => state.products);
  return (
    <>
      <div className="cart">
        <span className="cart__title">Корзина</span>
        <ul className="cart__list">
          { products.map((product) => (
            <ProductShoppingCart 
              key={product.id} 
              {...product}
            />
          ))}
        </ul>
      </div>

      <div className="payment">
        <div className="payment__count">
          <span>ИТОГО</span>
          <span>₽ 2 927</span>
        </div>
        <button className="payment__confirmation">
          Перейти к оформлению
        </button>
      </div>
    </>  
  );
};
