import React, { useState } from "react";
import styles from "./search.module.css"

export default function Search() {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
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
