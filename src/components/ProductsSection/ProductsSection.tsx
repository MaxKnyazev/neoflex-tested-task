import { SectionOfProductsProps } from '../../types';
import { ProductsList } from '../ProductsList';
import './ProductsSection.scss';

export const ProductsSection: React.FC<SectionOfProductsProps> = ({ products, fn, attribute, title }) => {
  return (
    <section className="products">
      <h2 className="products__title">{title}</h2>
      <ProductsList products={fn(products, attribute)} />
    </section>
  );
}
