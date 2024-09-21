import { ArrayOfProductsProps } from '../../types';
import { Product } from '../Product';
import './ProductsList.scss';

export const ProductsList: React.FC<ArrayOfProductsProps> = ({ products }) => {
  return (
    <ul className="products-list">
      { products.map((product) => (
        <Product 
          key={product.id} 
          {...product}
        />
      ))}
    </ul>
  );
};
