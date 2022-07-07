import React, { useReducer } from "react";

export default function ExCountReducr() {
    let initialState = 0;
  let [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "addOne":
        return state + 1;
      case "addFive":
        return state + 5;
      case "reset":
        return initialState;
      default:
        return state;
    }
  }, initialState);
  return (
    <div>
      <h2>This state is: {count}</h2>
      <button onClick={() =>dispatch("addOne")}>Add One</button>
      <button onClick={() =>dispatch("reset")}>Reset</button>
      <button onClick={() =>dispatch("decrement")}>Decrement</button>
    </div>
  );
}
