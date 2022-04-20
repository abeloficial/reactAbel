import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  useCartContex } from '../../context/cartContext'

import ItemCount from '../ItemCount/ItemCount'
import './itemDetails.css'


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
    
 <div className='container d-flex-inline'> 
   <Link to='/Cart'>
   
   <button onClick={console.log()}
       className="btn btn-outline-info m-3" 
      
      > Terminar compra
   </button>
   </Link>
   <br/>
   <Link  to='/'>
   
   <button onClick={console.log()}
       className="btn btn-outline-info" 
       
      > Seguir Comprando
   </button>
   
   </Link>
   
  
   </div>
)}


console.log(cartList)
  
  
  return (
    <div className='container detail'>
     <div className='lilita'>
       <div className='bg-warning'>
         <h2 style={{fontFamily:"Montserrat"}}>Mi Bebe Perfu</h2>
       </div>
     <img src={producto.img}  className='img' alt="imagen"/>
    <h2 style={{fontFamily:"Montserrat"}}>${producto.price}</h2>
    <h2 style={{fontFamily:"Montserrat"}}>Tintura:{producto.name}</h2>
    {cambio === true ?  <ItemCount initial={1} stock={5} OnAdd={OnAdd}  /> :    <Lola/>  }  
       
       </div> 
   
    
 
    </div>
    )
}

export default ItemDetail