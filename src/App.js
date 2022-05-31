// import { useState } from "react";
import React, { Component } from "react";
import ProductList from "./Components/ProductList/ProductList";
import Navbar from "./Components/Navbar/Navbar";
export class App extends Component {
  constructor (props) {
    super (props) 
    console.log("App.js constructor")
  }
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

  componentDidMount() { 
    console.log("App.js componentDidMount() ")
    //Ajax : 
    // Products => this.setState({Products...})
   }
   componentDidUpdate(prevProps,prevState) {
    console.log("App.js componentDidUpdate()")
   }
  render() {
    console.log("App.js render()")
    return (
      <div className="container" id="title">
        <Navbar totalItems={this.state.products.filter((p) => p.quantity > 0).length} />
        <ProductList
          products={this.state.products}
          onRemove={this.removeHandler}
          onIncrement={this.incrementHandler}
          onChange={this.changeHandlere}
          onDecrement={this.decrementHandler}
        />
      </div>
    );
  }
}
export default App;
