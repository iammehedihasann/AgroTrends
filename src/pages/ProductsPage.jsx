// src/pages/ProductsPage.jsx
import ProductList from "../components/card/ProductList.JSX";

const ProductsPage = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
