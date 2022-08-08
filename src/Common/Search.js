import React, { useState } from "react";
import { useProductActions } from "../Components/Providers/ProductsProvider";
import styles from "./search.module.css";

export default function Search() {

  const [value, setValue] = useState("");

  let dispatch = useProductActions()

  const changeHandler = (selectedOption) => {
    dispatch({ type: "search", selectedOption });
    setValue(selectedOption.value);
  };

  return (
    <div className={styles.formcontrol}>
      <div>You can Search for products...</div>
      <input
        className={styles.inputformcont}
        type="text"
        placeholder=" search for..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
}
