import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetails.css'




 const OnAdd = ()=>{
           
           return(

            <Link to='/Cart'>
            
            <button 
                className="btn btn-outline-primary" 
                onClick={()=>console.log('hola')} 
               > Terminar compra
            </button>
            <button 
                className="btn btn-outline-primary" 
                onClick={()=>console.log('ir a cart') } 
               > Ir a Cart
            </button>
            </Link>





           )
          
}


const ButtonCountt= ({handleInter})=> {
  return <button 
              className="btn btn-outline-success" 
              onClick={handleInter}
          >Agregar Al carrito</button>
          

}
function ItemDetail({producto}) {

  const [cambio, setCambio]= useState(true)
  const handleInter= ()=>{
    setCambio(false)
  }

  
  console.log(producto)
  return (
    <div className=' border border-dark container lilita '>
    <img src={producto.img}  className='img'/>
    <div>{producto.price}</div>
    <h2>{producto.name}</h2>
     
     
    
     
  
   
      <ItemCount/>
    {cambio === true ? <ButtonCountt handleInter={handleInter}/>
    
  
  :
  <OnAdd/>
  }
      
      
     
  
     
     
      
     
      
      
      
      
    
    
     
     
     
      
    </div>
    )
}

export default ItemDetail