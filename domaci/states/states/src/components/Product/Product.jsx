import React from 'react'
import './style.scss'

function Product({classNames, title, price, description}) {
  return (
    <div className={classNames}>
        <h1>{title}</h1>
         <p>{price}</p>
         <h2>{description}</h2>
    </div>
  )
}

export default Product