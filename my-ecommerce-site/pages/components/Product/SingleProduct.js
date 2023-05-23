import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SingleProduct.scss';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from '../Buttons/CustomButton';

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      product: this.props.showSingleProduct,
      allProducts: this.props.allProducts,
    };
    this.handleOnClickAddToCart = this.handleOnClickAddToCart.bind(this);
  }

  componentDidMount() {
    const { product, allProducts } = this.state;
    const foundProduct = allProducts.find((p) => p.productId === product.productId);
    if (foundProduct) {
      this.setState({ product: foundProduct });
    }
  }

  handleOnClickAddToCart() {
    const { product, allProducts } = this.state;
    setTimeout(() => {
      this.props.handleAddToCart(product.productId, allProducts);
    }, 500);
  }

  render() {
    const { product } = this.state;
    return (
      <div className="single-product-popup">
        <IconButton onClick={this.props.handleOnClose}>
          <CloseIcon />
        </IconButton>
        <div className="single-product-main-content">
          <div className="layout">
            <div className="single-product-page">
              <div className="information">
                <div className="name">{product?.name}</div>
                <div className="price">Price: ${product?.price}</div>
                <div className="in-stock">
                  <span>
                    The wine is
                    {product?.instock ? (
                      <span className="stock"> in stock</span>
                    ) : (
                      <span className="out-of-stock"> out-of-stock</span>
                    )}
                  </span>
                </div>
                <span className="desc">{product?.productDescription}</span>
                <div className="add-to-cart">
                  <CustomButton
                    onClick={this.handleOnClickAddToCart}
                    disabled={!product.instock}
                    title="Add to cart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SingleProduct.propTypes = {
  showSingleProduct: PropTypes.instanceOf(Object),
  handleAddToCart: PropTypes.func,
  handleOnClose: PropTypes.func,
  allProducts: PropTypes.instanceOf(Array),
};

export default SingleProduct;
