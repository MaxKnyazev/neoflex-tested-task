import { useStoreOfShoppingCart } from '../../store';
import { ProductProps } from '../../types';
import './Product.scss';

 export const Product: React.FC<ProductProps> = ({ ...product }) => {
  const { id, img, title, price, rate, attribute, discount } = product;
  const addProduct = useStoreOfShoppingCart(state => state.addProduct);
  return (
    <li className="product">
      <div className="product__wrapper">
        <img className="product__img" src={img} alt={title} />
      </div>
      <div className="product__info">
        <span className="product__title">{title}</span>
        <div className="product__price">
          {
            discount ?
              <>
                {discount} ₽
                <span className="product__discount">{price} ₽</span>
              </>
            :
              <>
                {price} ₽
              </>
          }
        </div>
        <div className="product__rating">
          <svg className="product__svg" width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z"/>
          </svg>
          {rate}
        </div>
        <button 
          className="product__buy"
          onClick={() => {if (addProduct) addProduct(product)}}
        >Купить</button>
      </div>
    </li>
  );
};
