import React from 'react'
import { useProductActions } from './../Providers/ProductsProvider';

export default function Filter() {
  const dispatch =  useProductActions()

  return (
    <div>
      <p>filter products based on:</p>
        order by:
      <select onChange={(e) => dispatch({type:"filter",event:e})}>
        <option value="">All</option>
        <option value="Xs">Xs</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
    </div>
  )
}
