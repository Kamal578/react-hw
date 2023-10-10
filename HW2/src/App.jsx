import { Component } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import Button from "./components/Button";
import { v4 as uuidv4 } from "uuid";
import { fetchData } from "./api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      isLoading: true,
      products: [],
      cart: [],
      favorites: [],
      selectedProductId: null,
      total: 0,
    };
  }

  handleOpenModal = (productId) => {
    this.setState((previousState) => ({
      isModalOpen: (previousState.isModalOpen = true),
      selectedProductId: (previousState.selectedProductId = productId),
    }));
  };

  handleCloseModal = () => {
    this.setState((previousState) => ({
      isModalOpen: (previousState.isModalOpen = false),
      selectedProductId: (previousState.selectedProductId = null),
    }));
  };

  handleUpdateCart = (updatedCart) => {
    const totalPrice = updatedCart.reduce(
      (total, product) => total + product.price,
      0
    );
    this.setState({ cart: updatedCart, total: totalPrice });
  };

  componentDidMount() {
    fetchData().then((data) => {
      this.setState({ products: data, isLoading: false });

      const localFavorites =
        JSON.parse(localStorage?.getItem("favorites")) || [];
      const localTotal = JSON.parse(localStorage?.getItem("totalPrice")) || 0;
      const localCart = JSON.parse(localStorage?.getItem("cart")) || [];

      this.setState({
        favorites: localFavorites,
        cart: localCart,
        total: localTotal,
      });
    });
  }

  componentDidUpdate(prevProps, previousState) {
    if (previousState.favorites.length !== this.state.favorites.length) {
      localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
    }
    if (previousState.cart.length !== this.state.cart.length) {
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
    }
    if (previousState.total !== this.state.total) {
      localStorage.setItem("totalPrice", JSON.stringify(this.state.total));
    }
  }

  handleAddProduct = (selectedProduct) => {
    const productToAdd = this.state.products.find(
      (product) => product.sku === selectedProduct.sku
    );

    const newCartItem = {
      id: uuidv4(),
      ...productToAdd,
    };

    const updatedCart = [...this.state.cart, newCartItem];

    this.setState({ cart: updatedCart }, () => {
      this.handlePrice();
      this.handleCloseModal();
    });
  };

  handlePrice = () => {
    const totalPrice = this.state.cart.reduce(
      (total, product) => total + product.price,
      0
    );
    this.setState({ total: totalPrice });
  };

  handleFav = (productId) => {
    if (!this.state.favorites.includes(productId)) {
      this.setState((previousState) => ({
        favorites: [...previousState.favorites, productId],
      }));
    }
  };

  removeFav = (productId) => {
    const updatedFav = this.state.favorites.filter((id) => id !== productId);
    this.setState({ favorites: updatedFav });
  };

  render() {
    const products = this.state.products.map((product) => ({
      ...product,
      key: product.sku,
    }));

    return (
      <>
        <Header
          cart={this.state.cart}
          products={products}
          fav={this.state.favorites}
          total={this.state.total}
          updateCart={this.handleUpdateCart}
        />
        <div className="">
          {this.state.isLoading ? ( // Conditionally render the loader
            <Loader />
          ) : (
            <ProductList
              products={products}
              onClick={this.handleOpenModal}
              handleFav={this.handleFav}
              removeFav={this.removeFav}
              favorites={this.state.favorites}
            />
          )}
        </div>
        {this.state.isModalOpen && (
          <Modal
            header="Would you like to include this particular item within your selection of products?"
            closeButton={true}
            text="Upon your decision to include this particular item into your selection, it shall promptly manifest itself within the confines of your shopping cart. May I inquire, do you possess unwavering certainty in your desire to effectuate this addition?"
            actions={
              <>
                <Button
                  onClick={() =>
                    this.handleAddProduct(this.state.selectedProductId)
                  }
                  text="Ok"
                />
                <Button onClick={this.handleCloseModal} text="Cancel"/>
              </>
            }
            onClose={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}

export default App;
