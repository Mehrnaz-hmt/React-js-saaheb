import React, { useRef,useEffect } from "react";
//1. useRef() => DOM Access
//2. To Store the value of previous state !!!

export default function FunctionalRef() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}
