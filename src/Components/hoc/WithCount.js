import React,{useState}from "react";

export const WithCount = (WrappedComponent,incrementValue) => {
  const UpdatedComponent = (props) => {
    //... logic : Count, increment, ...
    const [counter, setCounter] = useState(0);
    const incrementCount = () => {
      setCounter(counter + incrementValue);
    };
    return <WrappedComponent counter={counter} incrementCount={incrementCount} {...props}/>;
  };
  return UpdatedComponent;
};

export default WithCount;