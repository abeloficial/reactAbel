import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext, useCartContex } from '../../context/cartContext'

import ItemCount from '../ItemCount/ItemCount'
import './ItemDetails.css'




//  const OnAdd = (cant)=>{
//            console.log(cant)
           
//            return(
             

//             <Link to='/Cart'>
            
//             <button 
//                 className="btn btn-outline-primary" 
//                 onClick={cant} 
//                > Terminar compra
//             </button>
//             <button 
//                 className="btn btn-outline-primary" 
//                 onClick={cant } 
//                > Ir a Cart
//             </button>
//             </Link>

// )



           
          
// }


const ButtonCountt= ({handleInter})=> {
  
  return <button 
              className="btn btn-outline-success" 
              onClick={handleInter}
          >Agregar Al carrito</button>
          

}
function ItemDetail({producto}) {
  const {addToCart, cartList} = useCartContex()
function OnAdd (cant){
  addToCart({...producto,cantidad:cant}) 
 
}
console.log(cartList)
  const [cant, setCant] = useState(true)
  const [cambio, setCambio]= useState(true)
  const handleInter= ()=>{
    setCambio(false)
  }
const Testado = ()=>{
  setCant(false)
}
  
  
  return (
    <div className='  container lilita '>
    <img src={producto.img}  className='img'/>
    <div>{producto.price}</div>
    <h2>{producto.name}</h2>
    
     {cant ? <ItemCount initial={1} stock={5} OnAdd={OnAdd}              /> :< ButtonCountt handleInter={handleInter}/> }
     
     

      
     
  
     </div>
    )
}

export default ItemDetail