
import { ArrayOfProductsProps } from '../../types';
import { Product } from '../Product';
import AppleBYZS852I from '../../assets/img/AppleBYZS852I.png';
import './ShoppingCart.scss';

export const ShoppingCart: React.FC<ArrayOfProductsProps> = ({ products }) => {
  return (
    // <div>
    //   <h2>*********************</h2>
    //   <div className="products-list">
    //     {products.map((product) => (
    //       <Product 
    //         key={product.id} 
    //         {...product}
    //       />
    //     ))}
    //   </div>
    // </div>

    <main className="main">
    <div className="cart">
      <span className="cart__title">Корзина</span>

      <ul className="cart__list">
        <li className="cart__item">
          <div className="cart__general">
            <div className="cart__img--wrapper">
              <img className="cart__img" src={AppleBYZS852I} alt="AppleBYZS852I" />
            </div>
            <div className="cart__count">
              <span className="cart__change">-</span>
              <span className="cart__num">1</span>
              <span className="cart__change">+</span>
            </div>
          </div>

          <div className="cart__info">
            <span className="cart__title">Apple BYZ S852I</span>
            <span className="cart__price">2 927 ₽</span>
          </div>

          <div className="cart__result">
            <button className="cart__delete">
              <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="cart__svg" d="M15.8848 3.4H20.8667V5.1H18.874V16.15C18.874 16.3754 18.769 16.5916 18.5821 16.751C18.3953 16.9104 18.1418 17 17.8776 17H3.92813C3.66387 17 3.41044 16.9104 3.22358 16.751C3.03672 16.5916 2.93174 16.3754 2.93174 16.15V5.1H0.938965V3.4H5.92091V0.85C5.92091 0.624566 6.02589 0.408365 6.21275 0.248959C6.3996 0.0895533 6.65304 0 6.9173 0H14.8884C15.1527 0 15.4061 0.0895533 15.593 0.248959C15.7798 0.408365 15.8848 0.624566 15.8848 0.85V3.4ZM16.8812 5.1H4.92452V15.3H16.8812V5.1ZM12.3117 10.2L14.0734 11.7028L12.6645 12.9047L10.9029 11.4019L9.14124 12.9047L7.73234 11.7028L9.49396 10.2L7.73234 8.6972L9.14124 7.4953L10.9029 8.9981L12.6645 7.4953L14.0734 8.6972L12.3117 10.2ZM7.91369 1.7V3.4H13.892V1.7H7.91369Z"/>
              </svg>
            </button>

            <span className="cart__money">
              2 927 ₽
            </span>
          </div>
        </li>


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
  </main>
  );
};
