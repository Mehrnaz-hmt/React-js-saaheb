import React from 'react'
import style from './navbar.module.css'

export default function Navbar({totalItems}) {
  console.log("Navbar.js render()")
  return (
    <div className={style.navbarr}>
      <h2>Welcome to my shopping center!</h2>
      <span>{totalItems}</span>
    </div>    
  )
}
