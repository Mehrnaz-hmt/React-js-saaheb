import React, { useState, useContext, useReducer } from "react";
import { productsData } from "../db/productsData";
import _ from "lodash";

const ProductContext = React.createContext(); //state
const ProductContextDispatcher = React.createContext(); //useState

// const initialState = [
//   { title: "React.js", price: "90$", id: 1, quantity: 1 },
//   { title: "NodeJs", price: "70$", id: 2, quantity: 5 },
//   { title: "React.js", price: "80$", id: 3, quantity: 9 },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        const updatedProducts = [...state];
        product.quantity--;
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }

    case "edit": {
      const index = state.findIndex((item) => item.id === action.id); //1. found index
      console.log(index);
      const product = { ...state[index] }; //2. we found product //obj
      product.title = action.event.target.value;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "remove": {
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts; //done!
    }
    case "filter": {
      const value = action.selectedOption.value;
      if (value === "") {
        return productsData;
      } else {
        const updatedProducts = productsData.filter(
          (p) => p.availableSizes.indexOf(value) >= 0
        );
        return updatedProducts;
      }
    }
    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "Lowest") {
        return _.orderBy(products, ["price"], ["asc"]);
      } else {
        return _.orderBy(products, ["price"], ["desc"]);
      }
    }
    case "search": {
      const value = action.selectedOption.value;
      const allProducts = [...productsData];
    }
    default:
      return state;
  }
};
const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);
  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};
export default ProductsProvider;

export const useProductActions = () => {
  return useContext(ProductContextDispatcher);
};

export const useProducts = () => useContext(ProductContext);
