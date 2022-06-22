import React, { useEffect, useState, useContext } from "react";
import style from "./product.module.css";
import { BiTrash } from "react-icons/bi";
import { UserContext, UserWebsite } from "./../../App";

export default function Product({
  product,
  onChange,
  onDecrement,
  onDelete,
  onIncrement,
  children,
}) {
  // console.log("Product.js render()");
  const [userName, setUsername] = useState("");

  const changeHandler = (e) => {
    setUsername(e.target.value);
  };

  // useEffect(() => {
  //   console.log("Product.js componentDidMount()")
  // },[])

  // useEffect(() => {
  //   return () => {
  //     console.log("Product.js inside clean-up componentWillUnMount()")
  //   }
  // },[])


  const user = useContext(UserContext)
  const website = useContext(UserWebsite)
  
  console.log(user,website)


  return (
    <div className={style.product} onClick={product.click}>
      <input
        className={style.input}
        type="text"
        value={userName}
        onChange={changeHandler}
      />
      <p>{`Product name: ${product.title}`}</p>
      <p>{`Product price: ${product.price}`}</p>

      {children}
      <span className={style.value}>{product.quantity}</span>
      <input
        className={style.input}
        type="text"
        onChange={onChange}
        value={product.title}
      />

      <button
        onClick={onDecrement}
        // className={`${style.button} ${product.quantity ==1 ? style.remove : null}`} //first approach
        className={`${style.button} ${product.quantity == 1 && style.remove}`} //second approach
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>

      <button onClick={onIncrement} className={`${style.button} `}>
        +
      </button>
      <button className={style.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
