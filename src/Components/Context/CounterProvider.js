import React, { useState, useContext,useReducer } from "react";

const CounterContext = React.createContext(); //state
const CounterContextDispatcher = React.createContext(); //setState

const initialState = 0;
let reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "decrement":
      return state + 5;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer,initialState);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);

export const useCountActions = () => {
  return useContext(CounterContextDispatcher)
  // const addOne = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  // const addFive = () => {
  //   setCount((prevCount) => prevCount + 5);
  // };
  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };
  // return { addOne, addFive, decrement };
};
