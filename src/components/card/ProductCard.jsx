// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden border hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1 line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-green-600 font-bold text-lg">
            Price: {product.price}
          </span>

          <span className="text-xs text-white bg-green-500 px-2 py-0.5 rounded-full">
            Agri Special
          </span>
        </div>

        <Link to={`/products/${product.id}`}>
          <button className="w-full mt-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium py-2 rounded-md hover:from-green-700 hover:to-green-600 transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
