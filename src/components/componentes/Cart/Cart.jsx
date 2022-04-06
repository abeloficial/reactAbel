import React from 'react'
import { useCartContex } from '../../../context/cartContext'



function Cart() {

  const {cartList, removeCart} = useCartContex()
  return (
    <div>
      {cartList.map(prod => <li key={prod.id}>nombre:{prod.name}-cantidad : {prod.cantidad}</li>)}
      
    <button className='btn btn-outline-success' onClick={removeCart}> Vaciar Carrito</button></div>
  )
}

export default Cart