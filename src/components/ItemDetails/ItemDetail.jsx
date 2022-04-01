import React from 'react'
import './ItemDetails.css'

function ItemDetail({producto}) {
  console.log(producto)
  return (
    <div className=' border border-dark container lilita '>
    <img src={producto.img}  className='img'/>
    
    <div>{producto.price}</div>

    <h2>{producto.name}</h2>

    </div>
    )
}

export default ItemDetail