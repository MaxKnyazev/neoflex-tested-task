// import { ActionsShoppingCart, ArrayOfProductsProps } from '../../types';
// import { Product } from '../Product';
// import AppleBYZS852I from '../../assets/img/AppleBYZS852I.png';
import { useStoreOfProducts } from '../../store';
import { ProductShoppingCart } from '../ProductShoppingCart';
import './ShoppingCart.scss';

export const ShoppingCart: React.FC = () => {
  // const products = useStoreOfProducts((state) => state.products.filter(product => product.count > 0));
  const products = useStoreOfProducts((state) => state.products);
  const filteredProducts = products.filter(product => product.count > 0);
  let resultMoney = 0;
  filteredProducts.forEach(product => resultMoney += product.count * (product.discount || product.price))
  return (
    <>
      <div className="cart">
        <span className="cart__title">Корзина</span>
        <ul className="cart__list">
          { filteredProducts.map((product) => (
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
          <span>₽ {resultMoney}</span>
        </div>
        <button className="payment__confirmation">
          Перейти к оформлению
        </button>
      </div>
    </>  
  );
};
