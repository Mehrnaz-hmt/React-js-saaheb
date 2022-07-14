// import { useState } from "react";
import ProductList from "./Components/ProductList/ProductList";
import Navbar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/hoc/Wrapper";
import React from "react";
import { useState, useEffect } from "react";
import ProductProvider from "./Components/Providers/ProductsProvider";
import { useProductActions } from "./Components/Providers/ProductsProvider";
import { useProduct } from "./Components/Providers/ProductsProvider";
export const UserContext = React.createContext();
export const UserWebsite = React.createContext();

function App() {
  const products = useProduct();
  const setProducts = useProductActions();

  const removeHandler = (id) => {
    // console.log(`clicked ${id}`);
    const filteredProduct = products.filter((p) => p.id !== id);

    setProducts(filteredProduct);
  };

  const incrementHandler = (id) => {
    //1. id ==> ok
    //2. index
    const index = products.findIndex((item) => item.id === id);
    // console.log(index);
    //3.Clone the selected index and update the quantity:
    const product = { ...products[index] };
    product.quantity++;
    //4. update products:
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  const changeHandler = (event, id) => {
    const index = products.findIndex((item) => item.id === id); //1. found index
    const product = { ...products[index] }; //2. we found product //obj
    product.title = event.target.value;

    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    if (product.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id);
      setProducts(filteredProducts);
    } else {
      const updatedProducts = [...products];
      product.quantity--;
      updatedProducts[index] = product;
      setProducts(updatedProducts);
    }
  };

  useEffect(() => {
    console.log("App.js componentDidUpdate()");
  }, []);

  return (
    <div>
      <ProductProvider>
        <Navbar/>
        <ProductList
          onRemove={removeHandler}
          onIncrement={incrementHandler}
          onChange={changeHandler}
          onDecrement={decrementHandler}
        />
      </ProductProvider>
    </div>
  );
}
export default Wrapper(App, "Container");
