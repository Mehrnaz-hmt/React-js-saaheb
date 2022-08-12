import React from "react";
import { useProductActions } from "./../Providers/ProductsProvider";
import { useState } from "react";
import Select from "react-select";
import styles from "./Filter.module.css";
import { productsData } from "../db/productsData";
import SelectComponent from "../../Common/Select/Select";
import SearchBar from './../../Common/Search/Search';

export default function Filter() {
  const dispatch = useProductActions();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState([]);

  const filterOptions = [
    { value: "", label: "All" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };

  const sortOptions = [
    { value: "Highest", label: "Highest" },
    { value: "Lowest", label: "Lowest" },
  ];

  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  return (
    <section >
        <SearchBar filter={filter}/>
        <div className={styles.filter}> 
            <span className={styles.spanTag1}>
          {" "}
          <b>Order by:</b>
        </span>
                <SelectComponent
           title="sort by size"
           value={filter}
           onChange={filterHandler}
           options={filterOptions}
          //  className={styles.select}
        />
      <SelectComponent
        title="sort by price"
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
        // className={styles.select}
      /> 
       </div>
    </section>
      
      

  );
}
