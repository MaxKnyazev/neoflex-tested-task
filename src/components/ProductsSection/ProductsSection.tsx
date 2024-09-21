import { SectionOfProductsProps } from '../../types';
// import { filteringFunction } from '../utils/functions';
import { ProductsList } from '../ProductsList';
import './ProductsSection.scss';

export const ProductsSection: React.FC<SectionOfProductsProps> = ({ products, fn, attribute, title }) => {
  // const productsLandline = filteringFunction(products, `landline`)
  // const productsWireless = filteringFunction(products, `wireless`)
  return (
    <section className="products">
      <h2 className="products__title">{title}</h2>
      <ProductsList products={fn(products, attribute)} />
    </section>
  );
}


    /* <section className="products">
      <h2>Wireless</h2>
      <ProductsList products={productsWireless} />
    </section> */
