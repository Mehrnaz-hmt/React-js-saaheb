import React from 'react'
import { useProduct } from '../Providers/ProductsProvider'
import style from './navbar.module.css'

export default function Navbar() {
  const products = useProduct()
  const totalItems = products.filter((p) => p.quantity > 0).length
  // console.log("Navbar.js render()")
  return (
    <div className={style.navbarr}>
      <h2>Welcome to my shopping center!</h2>
      <span>{totalItems}</span>
    </div>    
  )
}
