import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  useCartContex } from '../../context/cartContext'

import ItemCount from '../ItemCount/ItemCount'
import './ItemDetails.css'




// const ButtonCountt= ({handleInter})=> {
  
//   return <button 
//               className="btn btn-outline-success" 
//               onClick={handleInter}
//           >Agregar Al carrito</button>
          

// }



  
function ItemDetail({producto}) {
  const {addToCart, cartList} = useCartContex()
  
  const [cambio, setCambio]= useState(true)
  const handleInter= ()=>{
    setCambio(false)}



function OnAdd (cant){
  addToCart({...producto,cantidad:cant}) 
 setCambio(handleInter)
}

const Lola = ()=>{
           
           
  return(
    
 <> 
   <Link to='/Cart'>
   
   <button onClick={console.log('ckickn')}
       className="btn btn-outline-primary" 
      
      > Terminar compra
   </button>
   </Link>
   <Link  to='/'>
   
   <button onClick={console.log('ckickn')}
       className="btn btn-outline-primary" 
       
      > Seguir Comprando
   </button>
   
   </Link>
   
  
   </>
)}


console.log(cartList)
  // const [cant, setCant] = useState(true)
  
//   }
// const Testado = ()=>{
//   setCant(false)
// }
  
  
  return (
    <div className='  container lilita '>
      
    <img src={producto.img}  className='img' alt="imagen"/>
    <div>{producto.price}</div>
    <h2>{producto.name}</h2>
    {cambio === true ?  <ItemCount initial={1} stock={5} OnAdd={OnAdd} /> :    <Lola/>  }  
    
 
    </div>
    )
}

export default ItemDetail