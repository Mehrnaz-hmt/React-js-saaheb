import React, { useReducer } from "react";

export default function CountReducer() {
  const initialState = {
    firstCounter: 0,
    secondCounter: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state,firstCounter: state.firstCounter + action.value };
      case "decrement":
        return {  ...state,firstCounter: state.firstCounter - action.value };
      case "add2":
        return {  ...state,secondCounter: state.secondCounter + action.value };
      case "decrement2":
        return {  ...state,secondCounter: state.secondCounter - action.value };
      case "Reset":
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count one is : {count.firstCounter}</h2>
      <h2>Count two is : {count.secondCounter}</h2>
      <div>
        <button onClick={() => dispatch({ type: "add",value:1 })}>Add One</button>
        <button onClick={() => dispatch({ type: "add",value:5 })}>Add Five</button>
        <button onClick={() => dispatch({ type: "decrement",value:1 })}>
          decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "add2",value:1 })}>Add One</button>
        <button onClick={() => dispatch({ type: "add2",value:5 })}>Add Five</button>
        <button onClick={() => dispatch({ type: "decrement2",value:1 })}>
          decrement
        </button>
      </div>

      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}
