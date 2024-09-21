import { ArrayOfProductsProps } from '../../types';
import { filteringFunction } from '../../utils/functions';
import { ProductsSection } from '../ProductsSection';

export const ProductsCatalog: React.FC<ArrayOfProductsProps> = ({ products }) => {
  return (
    <div className="catalog">
      <ProductsSection 
        products={products} 
        fn={filteringFunction}
        attribute={`landline`} 
        title='LANDLINE'
      />
      <ProductsSection 
        products={products} 
        fn={filteringFunction}
        attribute={`wireless`} 
        title='WIRELESS'
      />
    </div>
  );
}
