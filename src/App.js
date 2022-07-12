// import { useState } from "react";
import React, { Component } from "react";
import ProductList from "./Components/ProductList/ProductList";
import Navbar from "./Components/Navbar/Navbar";
import ClassCounter from "./Components/ClassCounter";
import FunctionalCounter from "./Components/FunctionalCounter";
import ClassTimer from "./Components/ClassTimer";
import style from "./index.css";
import FunctionTimer from "./Components/FunctionTimer";
import Wrapper from "./Components/hoc/Wrapper";
import HoverCounter from "./Components/hocExample/HoverCounter";
import ClickCounter from "./Components/hocExample/ClickCounter";
import ParentComp from "./Components/PureMemoComp/ParentComp";
import ClassRef from "./Components/ref/ClassRef";
import FunctionalRef from "./Components/ref/FunctionalRef";
import PrevStateInput from "./Components/ref/PrevStateInput";
import  CounterProvider  from "./Components/Context/CounterProvider"
import CounterOne from './Components/Context/CounterOne';
import CountReducer from './Components/Reducer/CountReducer';
import ExCountReducr from './Components/Reducer/ExCountReducrTwo.js';

export const UserContext = React.createContext();
export const UserWebsite = React.createContext();

export class App extends Component {
  constructor(props) {
    super(props);
    // console.log("App.js constructor");
  }
  state = {
    products: [
      { title: "React.js", price: "90$", id: 1, quantity: 1 },
      { title: "NodeJs", price: "70$", id: 2, quantity: 5 },
      { title: "React.js", price: "80$", id: 3, quantity: 9 },
    ],
    isShow: true,
  };

  removeHandler = (id) => {
    // console.log(`clicked ${id}`);
    const filteredProduct = this.state.products.filter((p) => p.id !== id);

    this.setState({ products: filteredProduct });
  };

  incrementHandler = (id) => {
    //1. id ==> ok
    //2. index
    const index = this.state.products.findIndex((item) => item.id === id);
    console.log(index);
    //3.Clone the selected index and update the quantity:
    const product = { ...this.state.products[index] };
    product.quantity++;
    //4. update products:
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  changeHandlere = (event, id) => {
    const index = this.state.products.findIndex((item) => item.id === id); //1. found index
    const product = { ...this.state.products[index] }; //2. we found product //obj
    product.title = event.target.value;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products: products });
  };

  decrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.quantity--;
    const products = [...this.state.products];
    products[index] = product;
    if (product.quantity <= 0) {
      const filteredProduct = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filteredProduct });
    } else {
      this.setState({ products });
    }
  };

  componentDidMount() {
    // console.log("App.js componentDidMount() ");
    //Ajax :
    // Products => this.setState({Products...})
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("App.js componentDidUpdate()");
    console.log("App.js", prevState);
  }
  render() {
    // console.log("App.js render()");
    // console.log(this.props)
    return (
      <>
        <CounterProvider>
          <p>Welcome to context</p>
          <CounterOne/>
          
        </CounterProvider>
        <ExCountReducr/>
        <CounterOne/>
        <CountReducer/>

        {/* <Navbar
          totalItems={this.state.products.filter((p) => p.quantity > 0).length}
        /> */}

        {/* <ProductList
          products={this.state.products}
          onRemove={this.removeHandler}
          onIncrement={this.incrementHandler}
          onChange={this.changeHandlere}
          onDecrement={this.decrementHandler}
        /> */}
        {/* <ClickCounter /> */}
        {/* <HoverCounter /> */}
        {/* <ParentComp /> */}
        {/* <ClassRef/> */}
        {/* <FunctionalRef /> */}
        {/* <PrevStateInput /> */}
      </>
    );
  }
}
export default Wrapper(App, "container");
