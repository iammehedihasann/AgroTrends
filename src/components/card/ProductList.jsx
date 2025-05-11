import ProductCard from "./ProductCard";
// import { products } from "../data/products";
import { products } from "../data/products";

const ProductList = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
