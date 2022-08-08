import React from "react";
import { useProductActions } from "./../Providers/ProductsProvider";
import { useState } from "react";
import Select from "react-select";
import styles from "./Filter.module.css";
import { productsData } from "../db/productsData";
import SelectComponent from "../../Common/Select/Select";

export default function Filter() {
  const dispatch = useProductActions();
  const [value, setValue] = useState("");
  const [sort, setSort] = useState([]);

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
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setValue(selectedOption);
  };

  const sortOptions = [
    { value: "Highest", label: "Highest" },
    { value: "Lowest", label: "Lowest" },
  ];

  const sortHandler = (selectedOption) => {
    // console.log(selectedOption);
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.selectContainer}>
        <span className={styles.spanTag1}>
          {" "}
          <b>Order by:</b>
        </span>
        <SelectComponent
           title="sort by size"
           value={value}
           onChange={changeHandler}
           options={options}
           className={styles.select}
        />
      </div>
      <SelectComponent
        title="sort by price"
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
        className={styles.select}
      />
    </div>
  );
}
