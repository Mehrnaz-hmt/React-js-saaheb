import React from "react";
import { useProductActions } from "./../Providers/ProductsProvider";
import { useState } from "react";
import Select from "react-select";
import styles from "./Filter.module.css";
import { productsData } from "../db/productsData";

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

  const sortOptions = [
    { value: "Highest", label: "Highest" },
    { value: "Lowest", label: "Lowest" },
  ];

  const changeHandler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption:sort });

    setValue(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.selectContainer}>
        <span className={styles.spanTag1}> <b>Order by:</b></span>
        <Select
          value={value}
          onChange={changeHandler}
          options={options}
          className={styles.select}
        />
      </div>
      <div className={styles.selectContainer}>
        <span className={styles.spanTag2}><b>Sort products based on price</b></span>
        <Select
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
          className={styles.select}
        />
      </div>
    </div>
  );
}

// const myArr = [];
// const prices = productsData.forEach((x) => myArr.push(x.price));
// const result = myArr
//   .sort(function (a, b) {
//     return a - b;
//   })
//   .reverse();
// console.log(result); // [198.95, 109.96, 109.95, 109, 98.95, 56.95, 46.95, 19.95]
//  const optionsTwo = [];

// console.log(optionsTwo);
// const myLoop = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     const ww = `{value: ${arr[i]}, label: ${arr[i]} }`;
//     var res = optionsTwo.push(ww);
//     console.log(ww);
//   }
// };
// myLoop(result);
