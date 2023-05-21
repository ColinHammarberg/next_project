// SingleProduct.jsx
import React, { Component } from "react";
import "./components/SingleProduct.scss";
import Image from "next/image";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      product: this.props.showSingleProduct,
      allProducts: this.props.allProducts
    };
  }

  componentDidMount() {
    const { product, allProducts } = this.state;
    const foundProduct = allProducts.find((p) => p.productId === product.productId);
    if (foundProduct) {
      this.setState({ product: foundProduct });
    }
  }

  decrement = () => {
    this.setState((prevState) => {
      if (prevState.quantity === 1) return { quantity: 1 };
      return { quantity: prevState.quantity - 1 };
    });
  };

  increment = () => {
    this.setState((prevState) => {
      return { quantity: prevState.quantity + 1 };
    });
  };

  render() {
    const { product } = this.state;
    return (
      <div className="single-product-popup">
        <IconButton className="close-btn" onClick={this.props.handleOnClose}><CloseIcon /></IconButton>
        <div className="single-product-main-content">
          <div className="layout">
            <div className="single-product-page">
              <div className="image">
                <Image src={product?.productImage?.url} alt="Product" />
              </div>
              <div className="information">
                <div className="name">{product?.name}</div>
                <div className="price">Price: ${product?.price}</div>
                <span className="desc">{product?.productDescription}</span>

                <div className="cart-buttons">
                  <div className="InStock">
                    <span>{product?.instock && 'The wine is in stock'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
