import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import Product from "../Product/Product";
import style from "./productList-module.css";

export default class ProductList extends Component {
 
  renderProduct = () => {
     const {products,onChange,onDecrement,onIncrement,onRemove} = this.props;
    if (products.length === 0)
      return <div className="empty">There is no products in your cart!</div>;
    return products.map((product, index) => {
      return (
        <Product
          key={index}
          product={product}
          onDelete={() => onRemove(product.id)}
          onIncrement={() => onIncrement(product.id)}
          onChange={(e) => onChange(e, product.id)}
          onDecrement={() => onDecrement(product.id)}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {/* {!this.state.products.length ? ( //length == 0 => !falsy == truthy length == 2 !truthy == falsy  
          <div>Go to shopping!</div>
        ) : (
          <div>Welcome back!</div>
        )} */}
        {!this.props.products.length && <div>Go to shopping!</div>}
        {this.renderProduct()}
      </div>
    );
  }
}
