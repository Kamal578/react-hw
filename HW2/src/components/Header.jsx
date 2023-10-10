import { Component } from "react";
import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isDropdownOpen: false,
    };
  }

  handleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  handleRemoveItem = (productsku) => {
    const updatedCart = [...this.props.cart];
    const indexToRemove = updatedCart.findIndex(
      (product) => product.sku === productsku
    );
    if (indexToRemove !== -1) {
      updatedCart.splice(indexToRemove, 1);
      this.props.updateCart(updatedCart);
    }
  };

  render() {
    const { cart, fav, total } = this.props;

    return (
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="mr-2">
                <FaCartPlus className="text-xl cursor-pointer" />
              </div>
              <div className="favorite-products">Favorites ({fav.length})</div>
            </div>

            <button
              className="flex items-center bg-red-600 rounded-lg text-black py-2 px-4 hover:bg-red-700 focus:outline-none"
              onClick={this.handleDropdown}
            >
              <FaCartPlus className="text-xl mr-2" />
              Cart ({cart.length})
            </button>

            {this.state.isDropdownOpen && (
              <div className="mt-10 absolute top-14 right-0 w-96 bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="p-4">
                  <ul>
                    {cart.map((product) => (
                      <li
                        className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2"
                        key={product.id}
                      >
                        <div className="flex items-center">
                          <img
                            src={product.imgPath}
                            alt={product.name}
                            className="w-16 h-16 object-cover"
                          />
                          <h3 className="ml-4 text-lg font-medium text-black">
                            {product.name}
                          </h3>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xl font-medium mr-2">
                            ${product.price}
                          </span>
                          <button
                            className="text-red-600 hover:text-red-800 cursor-pointer"
                            onClick={() => this.handleRemoveItem(product.sku)}
                          >
                            ╳
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between mt-4">
                    <h3 className="text-lg">Total delivery cost:</h3>
                    <span className="text-red-600 text-xl font-semibold">
                      ${total}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md mr-2">
                      Checkout
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-md">
                      View Cart
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  cart: PropTypes.array,
  fav: PropTypes.array,
  total: PropTypes.number,
  updateCart: PropTypes.func,
};

Header.defaultProps = {
  cart: [],
  fav: [],
  total: 0,
};

export default Header;
