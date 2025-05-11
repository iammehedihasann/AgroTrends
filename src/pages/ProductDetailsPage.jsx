import { useParams } from "react-router-dom";
import { products } from "../components/data/products"; // Adjust the import path as necessary

const ProductDetailsPage = () => {
  const { id } = useParams();
  const productId = parseInt(id); // Convert string to number
  const product = products.find((p) => p.id === productId);

  if (!product)
    return <div className="text-center mt-10">Product not found!</div>;

  return (
    <div className="relative max-w-3xl mx-auto p-6 mt-10">
      {/* Blurred background image */}
      <div className="absolute inset-10 -z-10 opacity-50 blur-md">
        <img
          src={product.image}
          alt="blurred background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main product image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-green-600 font-bold mb-2">{product.price}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <a
        href={product.buyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
      >
        Buy Now
      </a>
    </div>
  );
};

export default ProductDetailsPage;
