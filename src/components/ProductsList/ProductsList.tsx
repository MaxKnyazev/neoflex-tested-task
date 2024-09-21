import { ArrayOfProductsProps } from '../../types';
import { Product } from '../Product';

export const ProductsList: React.FC<ArrayOfProductsProps> = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <Product 
          key={product.id} 
          {...product}
        />
      ))}
    </div>
  );
};
