import { ProductsCatalog } from '../components/ProductsCatalog';
import { SessionStorageExample } from '../components/SessionStorageExample';

export const ProductsCatalogPage: React.FC = () => {
  return (
    <div className="products-catalog">
      <SessionStorageExample />
      <ProductsCatalog />
    </div>
  );
}
