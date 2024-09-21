import { ProductsCatalog } from '../components/ProductsCatalog';
import { useStoreOfProducts } from '../store';

export const ProductsCatalogPage: React.FC = () => {
  const products = useStoreOfProducts((state) => state.products);
  
  return (
    <div className="products">
      <ProductsCatalog products={products} />
    </div>
  );
}
