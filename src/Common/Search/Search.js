import React, { useState } from "react";
import { useProductActions } from "../../Components/Providers/ProductsProvider";
import styles from "./search.module.css";

export default function Search({filter}) {

  const [value, setValue] = useState("");
  const dispatch = useProductActions()

  const changeHandler = (e) => {
    dispatch({ type: "filter", selectedOption :filter });
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
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
