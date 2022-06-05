import React from "react";
import { useState,useEffect} from "react";

export default function FunctionTimer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const myTimer = setInterval(() => {
        console.log("Hi Mehrnaz")
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(myTimer);
    };
  },[]);
  return <div>classTimer</div>;
}
