import React,{useState} from "react";
import style from "./product.module.css";

export default function Product(props) {
  const [userName,setUsername] = useState("")

  const changeHandler =(e) => {
    setUsername(e.target.value)
  }

  return (
    <div className={style.product} onClick={props.product.click}>
      <input className={style.input} type="text" value={userName} onChange={changeHandler}/>
      <p>
       { `Product name: ${props.product.title}`}
      </p>
      <p>{`Product price: ${props.product.price}`}</p>
     
      {props.children}
      <span className={style.value}>{props.product.quantity}</span>
      <input
        className={style.input}
        type="text"
        onChange={props.onChange}
        value={props.product.title}
      />
        
      <button onClick={props.onDecrement} className={`${style.button} ${style.inc}`}>
       -
      </button>
      <button
        onClick={props.onIncrement}
        className={`${style.button} ${style.inc}`}
      >
        +
      </button>
      <button className={style.button} onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
}
