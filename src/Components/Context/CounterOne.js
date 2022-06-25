// import React from "react";
import {useCount,useCountActions} from "./CounterProvider";

const CounterOne = () => {
  const count = useCount()
  const setCount = useCountActions()

  return (
    <div>
      <h2> Count is: {count} </h2>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  );
};
export default CounterOne;
// This component can be anywhere in program
