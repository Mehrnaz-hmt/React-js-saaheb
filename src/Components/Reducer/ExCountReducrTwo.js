import React, { useReducer } from "react";

export default function ExCountReducr() {
  let initialState = 0;

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
  
  let [count, dispatch] = useReducer(reducer, initialState);
  let [countTwo, dispatchTwo] = useReducer(reducer, initialState);

 

  return (
    <div>
      <h2>Count One is: {count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "add", value: 5 })}>
          Add One
        </button>
        <button onClick={() => dispatch({ type: "reset"})}>
          Reset
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
      </div>
      <div>
        <h2>Count Two is: {countTwo}</h2>

        <button onClick={() => dispatchTwo({ type: "add", value: 5 })}>
          Add One
        </button>
        <button onClick={() => dispatchTwo({ type: "reset"})}>
          Reset
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
          Decrement
        </button>
      </div>
    </div>
  );
}
