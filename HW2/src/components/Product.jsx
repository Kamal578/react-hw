import { Component } from "react";
import PropTypes from "prop-types";
import { FaRegStar, FaStar } from "react-icons/fa";

class Product extends Component {
  render() {
    const { product, onClick, handleFav, favorites, removeFav } = this.props;
    const isFavorited = favorites.includes(product.sku);

    return (
      <div className="max-w-x rounded-lg overflow-hidden shadow-lg p-4 bg-white">
        <img
          src={product.imgPath}
          alt={product.name}
          className="w-full h-64 object-fit"
        />
        <div className="text-center">
          <h2 className="mt-2 mb-5 text-base font-semibold">{product.name}</h2>
          <span
            className="cursor-pointer"
            onClick={() => {
              isFavorited ? removeFav(product.sku) : handleFav(product.sku);
            }}
          >
            {isFavorited ? (
              <FaStar className="text-yellow-500 text-2xl" />
            ) : (
              <FaRegStar className="text-gray-500 text-2xl" />
            )}
          </span>
        </div>
        <p className="text-sm mt-2">
          {product.description.substring(0, 100) + "..."}
        </p>
        <div className="flex justify-between items-center mt-4">
          <h4 className="text-lg font-semibold text-blue-500">
            {"$" + product.price}
          </h4>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 cursor-pointer"
            onClick={() => onClick(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
  handleFav: PropTypes.func,
  favorites: PropTypes.array,
  removeFav: PropTypes.func,
};

Product.defaultProps = {
  product: {},
  favorites: [],
};

export default Product;
