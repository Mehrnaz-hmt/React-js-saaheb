import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import Product from "../Product/Product";
import style from "./productList-module.css";

export default class ProductList extends Component {
  state = {
    products: [
      { title: "React.js", price: "90$", id: 1, quantity: 1 },
      { title: "NodeJs", price: "70$", id: 2, quantity: 5 },
      { title: "React.js", price: "80$", id: 3, quantity: 9 },
    ],
  };

  removeHandler = (id) => {
    // console.log(`clicked ${id}`);
    const filteredProduct = this.state.products.filter((p) => p.id !== id);

    this.setState({ products: filteredProduct });
  };

  incrementHandler = (id) => {
    // console.log("first",id);
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.quantity++;
    this.setState({ products });
  };

  changeHandlere = (event, id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.title = event.target.value;
    this.setState({ products: products });
    // console.log(products)
    // console.log(event.target.value, id);
  };

  decrementHandler = (id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.quantity--;
    if (selectedItem.quantity <= 0) {
      const filteredProduct = this.state.products.filter((p) => p.id !== id);

      this.setState({ products: filteredProduct });
    } else {
      this.setState({ products });
    }
  };
  renderProduct = () => {
    if (this.state.products.length === 0)
      return <div className="empty">There is no products in your cart!</div>;
    return this.state.products.map((product, index) => {
      return (
        <Product
          key={index}
          product={product}
          onDelete={() => this.removeHandler(product.id)}
          onIncrement={() => this.incrementHandler(product.id)}
          onChange={(e) => this.changeHandlere(e, product.id)}
          onDecrement={() => this.decrementHandler(product.id)}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {!this.state.products.length ? (
          <div>Go to shopping!</div>
        ) : (
          <div>Welcome back!</div>
        )}
        {this.renderProduct()}
      </div>
    );
  }
}
