
import { ArrayOfProductsProps } from '../../types';
import { Product } from '../Product';

export const ShoppingCart: React.FC<ArrayOfProductsProps> = ({ products }) => {
  return (
    <div>
      <h2>*********************</h2>
      <div className="products-list">
        {products.map((product) => (
          <Product 
            key={product.id} 
            {...product}
          />
        ))}
      </div>
    </div>
  );
};
