import React from "react";
import { useProductActions } from "./../Providers/ProductsProvider";
import { useState } from "react";

export default function Filter() {
  const dispatch = useProductActions();
  const [value, setValue] = useState("");6868
  const changeHandler = (e) => {
     dispatch({ type: "filter", event: e });
    setValue(e.target.value)
  };

  return (
    <div>
      <p>filter products based on:</p>
      order by:
      <select onChange={changeHandler} value={value}>
        <option value="">All</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
    </div>
  );
}
