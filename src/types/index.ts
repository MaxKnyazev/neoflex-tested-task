export type ProductProps = {
  id: number;
  img: string;
  title: string;
  price: number;
  discount: number;
  rate: number;
  attribute: string;
  description?: string;
}

export type ArrayOfProductsProps = {
  products: ProductProps[];
}

export type ArrayFunction<T> = (inputArr: T[], attribute: string) => T[];

export type SectionOfProductsProps = {
  products: ProductProps[];
  fn: ArrayFunction<ProductProps> 
  attribute: string; 
  title: string;
}

export type ActionsShoppingCart = {
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
}
