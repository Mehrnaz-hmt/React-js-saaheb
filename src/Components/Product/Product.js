import React, { useEffect, useState, useContext } from "react";
import style from "./product.module.css";
import { BiTrash } from "react-icons/bi";

export default function Product({
  product,
  onChange,
  onDecrement,
  onDelete,
  onIncrement,
}) {
  return (
    <div className={style.product} onClick={product.click}>
      <p>{`Product name: ${product.title}`}</p>
      <p>{`Product price: ${product.price}`}</p>

      <span className={style.value}>{product.quantity}</span>
      <input
        className={style.input}
        type="text"
        onChange={onChange}
        value={product.title}
      />

      <button
        onClick={onDecrement}
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
