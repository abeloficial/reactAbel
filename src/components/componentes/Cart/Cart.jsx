import React from 'react'
import { useCartContex } from '../../../context/cartContext'


function Cart() {

  const {cartList, removeCart,removeItem} = useCartContex()
  
  
  
  
  return (

    <>
    {cartList.length === 0 ? <h2>Tu carrito esta vacio</h2>:<div className='container d-flex flex-column '>

      
{cartList.map(prod => <li key={prod.id}> <img src= {prod.img} />nombre:{prod.name}- cantidad : {prod.cantidad}   </li>)}

<button onClick={removeItem}>delete item</button>
<button className='btn btn-outline-success' onClick={removeCart}> Vaciar Carrito</button>
{/* <h2>Total :  $ {total}</h2> */}

</div>    }
</>
)
    
    
    

   
  }

export default Cart