import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const { addOne, addFive, decrement } = useCountActions();

  return (
    <div>
      <h2>Count is :{count}</h2>
      <button onClick={addOne}>Add one</button>
      <button onClick={addFive}>Add five</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
export default CounterOne;
// This component can be anywhere in program
