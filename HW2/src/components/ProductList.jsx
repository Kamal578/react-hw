import { Component } from "react";
import PropTypes from "prop-types";
import Product from "./Product";

class ProductList extends Component {
  render() {
    const { products, onClick, handleFav, favorites, removeFav } = this.props;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => {
          return (
            <Product
              key={product.sku}
              product={product}
              onClick={onClick}
              handleFav={handleFav}
              removeFav={removeFav}
              favorites={favorites}
            />
          );
        })}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  onClick: PropTypes.func,
  handleFav: PropTypes.func,
  favorites: PropTypes.array,
  removeFav: PropTypes.func,
};

ProductList.defaultProps = {
  products: [],
  favorites: [],
};

export default ProductList;
