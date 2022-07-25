import React from "react";
import { useProductActions } from "./../Providers/ProductsProvider";
import { useState } from "react";
import Select from "react-select";
import styles from "./Filter.module.css";

export default function Filter() {
  const dispatch = useProductActions();
  const [value, setValue] = useState("");

  const options = [
    { value: "", label: "All" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];

  const changeHandler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "filter", selectedOption });
    setValue(selectedOption);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.selectContainer}>
      <p>filter products based on:</p>
        <span>order by:</span>
        <Select
          value={value}
          onChange={changeHandler}
          options={options}
          className={styles.select}
        />
      </div>
    </div>
  );
}
