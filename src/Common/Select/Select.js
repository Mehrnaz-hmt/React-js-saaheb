import React from "react";
import styles from './filter.module.css'
import Select from 'react-select'

export default function Filter({title,...rest}) {
  return (
    <div>
      <div className={styles.selectContainer}>
        <span className={styles.spanTag2}>
          <b>{title}</b>
        </span>
        <Select
          {...rest}
          className={styles.select}
        />
      </div>
    </div>
  );
}
