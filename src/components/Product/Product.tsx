import { ProductProps } from '../../types';

export const Product: React.FC<ProductProps> = ({ id, img, title, price, rate, attribute }) => {
  return (
    <div className="product">
      <div className="product__data">
        <h3>{title}</h3>
        <p>
          {id}--{img}--{rate}--{attribute}--Price: {price.toFixed(2)}---
          <button className="product__button">К У П И Т Ь</button>
        </p>
      </div>
    </div>
  );
};