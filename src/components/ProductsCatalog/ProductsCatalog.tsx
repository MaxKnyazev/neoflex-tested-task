import { filteringFunction } from '../../utils/functions';
import { ProductsSection } from '../ProductsSection';
import { useStoreOfProducts } from '../../store';
import './ProductsCatalog.scss';

export const ProductsCatalog: React.FC = () => {
  const products = useStoreOfProducts((state) => state.products);
  return (
    <main className="catalog">
      <ProductsSection 
        products={products} 
        fn={filteringFunction}
        attribute={`landline`} 
        title='Наушники'
      />
      <ProductsSection 
        products={products} 
        fn={filteringFunction}
        attribute={`wireless`} 
        title='Беспроводные наушники'
      />
    </main>
  );
}
