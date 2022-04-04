import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetails.css'




 const OnAdd = ({Testado})=>{
           
           return(
             

            <Link to='/Cart'>
            
            <button 
                className="btn btn-outline-primary" 
                onClick={Testado} 
               > Terminar compra
            </button>
            <button 
                className="btn btn-outline-primary" 
                onClick={(estado)=>console.log('ir a cart') } 
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
  const [cant, setCant] = useState(true)
  const [cambio, setCambio]= useState(true)
  const handleInter= ()=>{
    setCambio(false)
  }
const Testado = ()=>{
  setCant(false)
}
  
  console.log(producto)
  return (
    <div className='  container lilita '>
    <img src={producto.img}  className='img'/>
    <div>{producto.price}</div>
    <h2>{producto.name}</h2>
     
    <ItemCount initial={1} stock={5} onAdd={OnAdd}              />
  
      {cambio ? < ButtonCountt handleInter={handleInter}/> :
      
      <OnAdd   Testado={Testado} />
      
      }
      
     
  
     </div>
    )
}

export default ItemDetail