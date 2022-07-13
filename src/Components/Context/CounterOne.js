import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const dispatch = useCountActions();

  return (
    <div>
      <h2>CounterOne is :{count}</h2>
      <button onClick={() => {dispatch({ type: "add", value: 1 })}}>
        Add one
      </button>
      <button onClick={() => {dispatch({ type: "reset" })}}>Reset</button>
      <button onClick={() => {dispatch({ type: "decrement", value: 1 })}}>
        decrement
      </button>
    </div>
  );
};
export default CounterOne;
// This component can be anywhere in program
