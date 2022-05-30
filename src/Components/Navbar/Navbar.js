import React from 'react'
import style from './navbar.module.css'

export default function Navbar(props) {
  return (
    <div className={style.navbarr}>
      <h2>Welcome to my shopping center!</h2>
      <span>{props.totalItems}</span>
    </div>    
  )
}
