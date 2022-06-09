import React,{useState} from 'react'
import WithCount from '../hoc/WithCount';

 function HoverCounter({counter,incrementCount}) {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>Hovered {counter} times</h2>
    </div>
  )
}
export default WithCount(HoverCounter,10)

