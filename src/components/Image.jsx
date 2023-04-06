import React from 'react'
import style from './Image.module.css';

export default function Image() {

  return (
    <div className={style.container}>
        <h1>Image</h1>
        <ul>
            <li><img src="images/000101.png" alt="1" /></li>
            <li><img src="images/000401.png" alt="2" /></li>
            <li><img src="images/000701.png" alt="3" /></li>
        </ul>
        
    </div>
  )
}
