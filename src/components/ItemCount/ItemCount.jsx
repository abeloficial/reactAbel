import './ItemCount.css'
import {useState} from 'react'


          

              
function ItemCount({stock,initial,OnAdd}) {
//  const [stock,setStock]=useState(true)
  

const  [contador,setContador] = useState(initial)
 const fnsumar = ()=>{
   if(contador < stock){
     setContador(contador + 1 )
   }
 }

  
  const fnresta = ()=>{
    if (contador > initial){
      setContador(contador - 1)
    }
      
    
  }

  const fnreset = ()=>{
    OnAdd(contador)
  }
  console.log(contador)
  return (
    <div className='divo  bg-light container '>
        <div className="lola  d-flex">
            <div className=' container ' > 
                  <div>
                   
                  </div>
                  <div className='botones container d-flex justify-content-evenly'>
                  <button    onClick={fnsumar}          className='btn btn-info ' >+</button>
                  
                  <h2>{contador}</h2>
                  <button  onClick={fnresta} className='btn btn-danger '  >-</button>
                  
                  </div>
                  <br/>
                  
            </div>
        </div>
        <br/>
        <button onClick={fnreset} className=''>Agregar</button>
    </div>
  )
}

export default ItemCount