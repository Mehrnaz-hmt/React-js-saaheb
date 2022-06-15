import React, { useEffect, useRef, useState } from "react";

export default function PrevStateInput() {
  const [val, setVal] = useState("");
  const [count, setCount] = useState(0);
  const previousValue = useRef();
  const previousCount = useRef();

  const changeHandler = (e) => {
    setVal(e.target.value);
  };
  // const resetHandler = () => {
  //   setVal("");
  //   inputRef.current.focus();
  // };
  useEffect(() => {
    previousValue.current = val; //does not re render or component
    console.log("useEffect ++++++++++");
  }, [val]);

  useEffect(() => {
    previousCount.current = count; //does not re render or component
  }, [count]);
  return (
    <div>
      {console.log("Inside Return *********")}
      <input type="text" onChange={changeHandler} value={val} />
      <p>
        My name is {val} and it used to be {previousValue.current}
      </p>
      <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>Generate arndom</button>
      <div>Current state is : {count}</div>
      <div>Previous State is : {previousCount.current}</div>
    </div>
  );
}
